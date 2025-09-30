import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import type { Resource } from "@/lib/types"

interface ResourceCardProps {
  resource: Resource
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const categoryColors: Record<string, string> = {
    course: "bg-primary text-primary-foreground",
    scholarship: "bg-secondary text-secondary-foreground",
    funding: "bg-accent text-accent-foreground",
  }

  const categoryColor = categoryColors[resource.category.toLowerCase()] || "bg-muted text-muted-foreground"

  return (
    <Card className="flex flex-col h-full border-4 border-foreground hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="text-xl font-black line-clamp-2">{resource.title}</CardTitle>
            <CardDescription className="mt-3">
              <Badge className={cn("text-sm font-bold rounded-full px-4 py-1", categoryColor)}>
                {resource.category}
              </Badge>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-base leading-relaxed line-clamp-3">{resource.description}</p>
        {resource.tags && resource.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {resource.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-sm font-bold border-2 rounded-full">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        {resource.url ? (
          <Button asChild className="w-full font-bold rounded-full" size="lg">
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              View Details
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        ) : (
          <Button className="w-full font-bold rounded-full" size="lg" disabled>
            Coming Soon
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
