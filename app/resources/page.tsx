import { createServerClient } from "@/lib/supabase/server"
import { ResourceCard } from "@/components/resource-card"
import { Navbar } from "@/components/navbar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Upload } from "lucide-react"
import Link from "next/link"
import type { Resource } from "@/lib/types"

export default async function ResourcesPage() {
  const supabase = await createServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: resources } = await supabase.from("resources").select("*").order("created_at", { ascending: false })

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2 font-display">Learning Resources</h1>
              <p className="text-muted-foreground">
                Discover training opportunities, funding resources, and guides for sustainable rural entrepreneurship
              </p>
            </div>
            {user && (
              <Button asChild className="rounded-full">
                <Link href="/resources/upload">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload
                </Link>
              </Button>
            )}
          </div>
        </div>

        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search resources..." className="pl-10" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources?.map((resource: Resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>

        {(!resources || resources.length === 0) && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No resources found</p>
          </div>
        )}
      </main>
    </div>
  )
}
