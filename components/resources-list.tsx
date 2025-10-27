"use client"

import { useState, useMemo } from "react"
import { ResourceCard } from "@/components/resource-card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Video, FileText, Tag, Newspaper } from "lucide-react"
import { getAllTags, getTagColor } from "@/lib/tag-colors"
import { cn } from "@/lib/utils"
import type { Resource } from "@/lib/types"

interface ResourcesListProps {
  resources: Resource[]
}

export function ResourcesList({ resources }: ResourcesListProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const allTags = useMemo(() => getAllTags(resources), [resources])

  const filteredResources = useMemo(() => {
    let filtered = resources

    // Filter by tab
    if (activeTab === "videos") {
      filtered = filtered.filter((r) => r.type === "video")
    } else if (activeTab === "pdfs") {
      filtered = filtered.filter((r) => r.type === "pdf")
    } else if (activeTab === "articles") {
      filtered = filtered.filter((r) => r.type === "article")
    } else if (activeTab === "tags") {
      // Show all when in tags tab, filtering happens by selected tags
      filtered = resources
    }

    // Filter by selected tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((r) =>
        selectedTags.every((selectedTag) => r.tags?.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase())),
      )
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
  }, [resources, searchQuery, activeTab, selectedTags])

  const videoCount = resources.filter((r) => r.type === "video").length
  const pdfCount = resources.filter((r) => r.type === "pdf").length
  const articleCount = resources.filter((r) => r.type === "article").length

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

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

      <div className="flex flex-col md:flex-row gap-6">
        {/* Tab List - Horizontal on mobile, Vertical on desktop */}
        <div className="flex md:flex-col gap-1 md:min-w-[200px] md:border-r md:border-border md:pr-4 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          <button
            onClick={() => {
              setActiveTab("all")
              setSelectedTags([])
            }}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors whitespace-nowrap flex-shrink-0",
              activeTab === "all" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-muted-foreground",
            )}
          >
            <span className="font-medium">All Resources</span>
            <span className="text-sm opacity-70">({resources.length})</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("videos")
              setSelectedTags([])
            }}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors whitespace-nowrap flex-shrink-0",
              activeTab === "videos" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-muted-foreground",
            )}
          >
            <Video className="h-4 w-4" />
            <span className="font-medium">Videos</span>
            <span className="text-sm opacity-70">({videoCount})</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("pdfs")
              setSelectedTags([])
            }}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors whitespace-nowrap flex-shrink-0",
              activeTab === "pdfs" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-muted-foreground",
            )}
          >
            <FileText className="h-4 w-4" />
            <span className="font-medium">PDFs</span>
            <span className="text-sm opacity-70">({pdfCount})</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("articles")
              setSelectedTags([])
            }}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors whitespace-nowrap flex-shrink-0",
              activeTab === "articles" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-muted-foreground",
            )}
          >
            <Newspaper className="h-4 w-4" />
            <span className="font-medium">Articles</span>
            <span className="text-sm opacity-70">({articleCount})</span>
          </button>

          <button
            onClick={() => setActiveTab("tags")}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors whitespace-nowrap flex-shrink-0",
              activeTab === "tags" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-muted-foreground",
            )}
          >
            <Tag className="h-4 w-4" />
            <span className="font-medium">By Tags</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 min-w-0">
          {/* Tag filters - shown when tags tab is active */}
          {activeTab === "tags" && (
            <div className="mb-6 space-y-3">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Filter by tags</p>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={cn(
                      "transition-all",
                      selectedTags.includes(tag) ? "ring-2 ring-primary ring-offset-2" : "",
                    )}
                  >
                    <Badge className={cn("text-xs font-medium rounded-full px-3 py-1 border-0", getTagColor(tag))}>
                      {tag}
                    </Badge>
                  </button>
                ))}
              </div>
              {selectedTags.length > 0 && (
                <button
                  onClick={() => setSelectedTags([])}
                  className="text-xs text-muted-foreground hover:text-foreground underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          )}

          {/* Resources grid */}
          {filteredResources.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {searchQuery || selectedTags.length > 0
                  ? "No resources found matching your filters"
                  : "No resources found"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
