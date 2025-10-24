import { cn } from "@/lib/utils"
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

  return (
    <Card className="flex flex-col h-full border-0 soft-shadow hover:soft-shadow-lg transition-all">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="text-lg font-bold line-clamp-2">{resource.title}</CardTitle>
            <CardDescription className="mt-3">
              <Badge className={cn("text-sm font-medium rounded-full px-3 py-1", categoryColor)}>
                {getResourceIcon()}
                <span className={cn(getResourceIcon() && "ml-1.5")}>{resource.type}</span>
              </Badge>
              {resource.file_size && (
                <span className="ml-2 text-xs text-muted-foreground">{formatFileSize(resource.file_size)}</span>
              )}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm leading-relaxed line-clamp-3 text-muted-foreground">{resource.description}</p>
        {resource.tags && resource.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {resource.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs font-medium rounded-full">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
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
