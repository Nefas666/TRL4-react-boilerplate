"use client"

import { useState, useMemo } from "react"
import { ResourceCard } from "@/components/resource-card"
import { Input } from "@/components/ui/input"
import { Search, Video, FileText } from "lucide-react"
import type { Resource } from "@/lib/types"

interface ResourcesListProps {
  resources: Resource[]
}

export function ResourcesList({ resources }: ResourcesListProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredResources = useMemo(() => {
    let filtered = resources

    // Filter by tab
    if (activeTab === "videos") {
      filtered = filtered.filter((r) => r.type === "video")
    } else if (activeTab === "pdfs") {
      filtered = filtered.filter((r) => r.type === "paper")
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (r) =>
          r.title.toLowerCase().includes(query) ||
          r.description?.toLowerCase().includes(query) ||
          r.category?.toLowerCase().includes(query) ||
          r.tags?.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    return filtered
  }, [resources, searchQuery, activeTab])

  const videoCount = resources.filter((r) => r.type === "video").length
  const pdfCount = resources.filter((r) => r.type === "paper").length

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search resources..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex gap-6">
        {/* Vertical Tab List */}
        <div className="flex flex-col gap-1 min-w-[200px] border-r border-border pr-4">
          <button
            onClick={() => setActiveTab("all")}
            className={`flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors ${
              activeTab === "all" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-muted-foreground"
            }`}
          >
            <span className="font-medium">All Resources</span>
            <span className="ml-auto text-sm opacity-70">({resources.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("videos")}
            className={`flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors ${
              activeTab === "videos" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-muted-foreground"
            }`}
          >
            <Video className="h-4 w-4" />
            <span className="font-medium">Videos</span>
            <span className="ml-auto text-sm opacity-70">({videoCount})</span>
          </button>

          <button
            onClick={() => setActiveTab("pdfs")}
            className={`flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors ${
              activeTab === "pdfs" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-muted-foreground"
            }`}
          >
            <FileText className="h-4 w-4" />
            <span className="font-medium">PDFs</span>
            <span className="ml-auto text-sm opacity-70">({pdfCount})</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1">
          {filteredResources.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {searchQuery ? "No resources found matching your search" : "No resources found"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
