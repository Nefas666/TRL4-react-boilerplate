import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

export async function updateSession(request: NextRequest) {
  const isDevMode = process.env.NEXT_PUBLIC_DEV_MODE === "true"
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // If dev mode is enabled or Supabase is not configured, skip all auth checks
  if (isDevMode || !supabaseUrl || !supabaseAnonKey) {
    const response = NextResponse.next({
      request,
    })
    if (isDevMode) {
      response.headers.set("x-dev-mode", "true")
    }
    if (!supabaseUrl || !supabaseAnonKey) {
      response.headers.set("x-supabase-disabled", "true")
    }
    return response
  }

  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll()
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
        supabaseResponse = NextResponse.next({
          request,
        })
        cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options))
      },
    },
  })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const isAuthRoute = request.nextUrl.pathname.startsWith("/auth")
  const isPublicRoute =
    request.nextUrl.pathname === "/" ||
    request.nextUrl.pathname === "/about" ||
    request.nextUrl.pathname === "/resources" ||
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.startsWith("/api")

  if (!user && !isAuthRoute && !isPublicRoute) {
    const url = request.nextUrl.clone()
    url.pathname = "/auth/login"
    return NextResponse.redirect(url)
  }

  if (user && isAuthRoute && request.nextUrl.pathname !== "/auth/sign-up-success") {
    const url = request.nextUrl.clone()
    url.pathname = "/profile"
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}
