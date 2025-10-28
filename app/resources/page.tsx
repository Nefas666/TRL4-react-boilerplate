import { createServerClient } from "@/lib/supabase/server"
import { ResourcesList } from "@/components/resources-list"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"
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
          <div className="flex items-start justify-between flex-wrap md:flex-nowrap gap-4">
            <div>
              <h1 className="text-6xl md:text-7xl mb-8 font-medium font-display tracking-wide text-foreground/80">
                Learning Resources
              </h1>

              <p className="text-2xl font-light text-foreground/80">
                Discover training opportunities, funding resources, and guides for sustainable rural entrepreneurship
              </p>
            </div>
            {user && (
              <Button asChild className="rounded-full py-4">
                <Link href="/resources/upload">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload
                </Link>
              </Button>
            )}
          </div>
        </div>

        <ResourcesList resources={(resources as Resource[]) || []} />
      </main>
    </div>
  )
}
