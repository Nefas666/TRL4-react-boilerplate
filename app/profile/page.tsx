import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MessageSquare, Upload, Download, LogOut, FileVideo, FileText } from "lucide-react"
import Link from "next/link"
import { signOut } from "@/app/actions/auth"

export default async function ProfilePage() {
  const supabase = await createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    redirect("/auth/login")
  }

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  const { data: conversations } = await supabase
    .from("chat_conversations")
    .select("*")
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false })
    .limit(5)

  const { data: uploadedResources } = await supabase
    .from("resources")
    .select("*")
    .eq("uploaded_by", user.id)
    .order("created_at", { ascending: false })
    .limit(5)

  const initials =
    profile?.display_name
      ?.split(" ")
      .map((n: string) => n[0])
      .join("")
      .toUpperCase() || "U"

  const formatFileSize = (bytes: number | null) => {
    if (!bytes) return ""
    const mb = bytes / (1024 * 1024)
    return `${mb.toFixed(2)} MB`
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="md:col-span-1">
            <CardHeader className="text-center">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
              </Avatar>
              <CardTitle>{profile?.display_name || "User"}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </CardHeader>
            <CardContent>
              {profile?.bio && <p className="text-sm text-muted-foreground mb-4">{profile.bio}</p>}
              <form action={signOut}>
                <Button type="submit" variant="outline" className="w-full gap-2 bg-transparent">
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Activity Cards */}
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="h-5 w-5" />
                    Uploaded Resources
                  </CardTitle>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/resources/upload">Upload New</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {uploadedResources && uploadedResources.length > 0 ? (
                  <div className="space-y-2">
                    {uploadedResources.map((resource) => (
                      <div key={resource.id} className="p-3 rounded-lg border hover:bg-accent cursor-pointer">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-start gap-2 flex-1">
                            {resource.type === "video" ? (
                              <FileVideo className="h-4 w-4 mt-0.5 text-blue-500 flex-shrink-0" />
                            ) : (
                              <FileText className="h-4 w-4 mt-0.5 text-red-500 flex-shrink-0" />
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-sm line-clamp-1">{resource.title}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <p className="text-xs text-muted-foreground">
                                  {new Date(resource.created_at).toLocaleDateString()}
                                </p>
                                {resource.file_size && (
                                  <span className="text-xs text-muted-foreground">
                                    • {formatFileSize(resource.file_size)}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          {resource.file_url && (
                            <Button asChild variant="ghost" size="sm">
                              <a href={resource.file_url} target="_blank" rel="noopener noreferrer">
                                <Download className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <Upload className="h-12 w-12 mx-auto text-muted-foreground/50 mb-2" />
                    <p className="text-sm text-muted-foreground mb-3">No resources uploaded yet</p>
                    <Button asChild size="sm">
                      <Link href="/resources/upload">Upload Your First Resource</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Recent Conversations
                </CardTitle>
              </CardHeader>
              <CardContent>
                {conversations && conversations.length > 0 ? (
                  <div className="space-y-2">
                    {conversations.map((conv) => (
                      <div key={conv.id} className="p-3 rounded-lg border hover:bg-accent cursor-pointer">
                        <p className="font-medium text-sm">{conv.title || "Untitled Conversation"}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(conv.updated_at).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">No conversations yet</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
