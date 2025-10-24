"use client"

import { useState, useMemo } from "react"
import { ResourceCard } from "@/components/resource-card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
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

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All ({resources.length})</TabsTrigger>
          <TabsTrigger value="videos">Videos ({videoCount})</TabsTrigger>
          <TabsTrigger value="pdfs">PDFs ({pdfCount})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="mt-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pdfs" className="mt-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            {searchQuery ? "No resources found matching your search" : "No resources found"}
          </p>
        </div>
      )}
    </div>
  )
}
