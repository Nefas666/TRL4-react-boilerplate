"use client"

import type React from "react"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { AlertCircle, Code } from "lucide-react"

export default function SignUpPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [displayName, setDisplayName] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isDevMode, setIsDevMode] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsDevMode(process.env.NEXT_PUBLIC_DEV_MODE === "true")
  }, [])

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long")
      setIsLoading(false)
      return
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || `${window.location.origin}/profile`,
          data: {
            display_name: displayName,
          },
        },
      })
      if (error) throw error
      router.push("/auth/sign-up-success")
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred"

      if (errorMessage.includes("invalid") && errorMessage.includes("email")) {
        setError(
          "This email address cannot be used. Please use a real email address (Gmail, Outlook, etc.) or enable Dev Mode for testing. See documentation for details.",
        )
      } else {
        setError(errorMessage)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleDevBypass = () => {
    router.push("/profile")
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-muted/30">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          {isDevMode && (
            <Alert className="border-0 bg-highlight/50 soft-shadow">
              <Code className="h-4 w-4 text-highlight-foreground" />
              <AlertDescription className="text-highlight-foreground text-sm">
                <strong>Development Mode Active</strong>
                <br />
                Authentication is bypassed. This should NEVER be enabled in production.
              </AlertDescription>
            </Alert>
          )}

          <Card className="border-0 soft-shadow-lg">
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl font-bold">Sign up</CardTitle>
              <CardDescription>Create a new account</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignUp}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="displayName">Display Name</Label>
                    <Input
                      id="displayName"
                      type="text"
                      placeholder="John Doe"
                      required
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      disabled={isDevMode}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isDevMode}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      required
                      minLength={8}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={isDevMode}
                      className="rounded-xl"
                    />
                    <p className="text-xs text-muted-foreground">Must be at least 8 characters</p>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      disabled={isDevMode}
                      className="rounded-xl"
                    />
                  </div>
                  {error && (
                    <Alert variant="destructive" className="border-0 soft-shadow">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  {isDevMode ? (
                    <Button type="button" onClick={handleDevBypass} className="w-full rounded-full" variant="secondary">
                      <Code className="mr-2 h-4 w-4" />
                      Bypass Auth (Dev Mode)
                    </Button>
                  ) : (
                    <Button type="submit" className="w-full rounded-full" disabled={isLoading}>
                      {isLoading ? "Creating account..." : "Sign up"}
                    </Button>
                  )}
                </div>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <Link href="/auth/login" className="underline underline-offset-4 text-primary">
                    Login
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
