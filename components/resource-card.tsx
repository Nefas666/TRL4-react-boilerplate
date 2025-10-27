import { cn } from "@/lib/utils"
import { getTagGradient } from "@/lib/gradient-utils"
import { getTagColor } from "@/lib/tag-colors"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileVideo, FileText, Download } from "lucide-react"
import type { Resource } from "@/lib/types"

interface ResourceCardProps {
  resource: Resource
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const categoryColors: Record<string, string> = {
    course: "bg-primary/10 text-primary-foreground border-primary/20",
    scholarship: "bg-secondary/10 text-secondary-foreground border-secondary/20",
    funding: "bg-accent/10 text-accent-foreground border-accent/20",
    paper: "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20",
    video: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
  }

  const categoryColor = categoryColors[resource.type.toLowerCase()] || "bg-muted text-muted-foreground"

  const formatFileSize = (bytes: number | null) => {
    if (!bytes) return ""
    const mb = bytes / (1024 * 1024)
    return `${mb.toFixed(2)} MB`
  }

  const getResourceIcon = () => {
    if (resource.type === "video") return <FileVideo className="h-4 w-4" />
    if (resource.type === "paper") return <FileText className="h-4 w-4" />
    return null
  }

  const coverGradient = getTagGradient(resource.tags)

  return (
    <Card className="flex flex-col h-full border-0 soft-shadow hover:soft-shadow-lg transition-all">
      <div className={cn("h-32 w-full relative rounded-t-lg", coverGradient)}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-t-lg" />
      </div>

      <CardHeader className="pt-4 pb-3 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-h-[3.5rem]">
            <CardTitle className="text-lg font-bold line-clamp-2 leading-snug">{resource.title}</CardTitle>
          </div>
        </div>
        <CardDescription className="flex items-center gap-2 flex-wrap">
          <Badge className={cn("text-sm font-medium rounded-full px-3 py-1", categoryColor)}>
            {getResourceIcon()}
            <span className={cn(getResourceIcon() && "ml-1.5")}>{resource.type}</span>
          </Badge>
          {resource.file_size && (
            <span className="text-xs text-muted-foreground">{formatFileSize(resource.file_size)}</span>
          )}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col gap-3 pb-3">
        <p className="text-sm leading-relaxed line-clamp-3 text-muted-foreground min-h-[3.75rem]">
          {resource.description}
        </p>

        {resource.tags && resource.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 min-h-[2rem]">
            {resource.tags.map((tag) => (
              <Badge
                key={tag}
                className={cn("text-xs font-medium rounded-full px-2.5 py-0.5 border-0", getTagColor(tag))}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-0">
        {resource.file_url ? (
          <Button asChild className="w-full font-medium rounded-full" size="default">
            <a href={resource.file_url} target="_blank" rel="noopener noreferrer">
              {resource.type === "video" ? "Watch Video" : "View PDF"}
              <Download className="ml-2 h-4 w-4" />
            </a>
          </Button>
        ) : resource.url ? (
          <Button asChild className="w-full font-medium rounded-full" size="default">
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              View Details
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        ) : (
          <Button className="w-full font-medium rounded-full" size="default" disabled>
            Coming Soon
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
