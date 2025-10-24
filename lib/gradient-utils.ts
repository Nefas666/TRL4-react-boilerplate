export function getTagGradient(tags: string[] | null): string {
  if (!tags || tags.length === 0) {
    return "bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900"
  }

  // Use first tag to determine gradient
  const primaryTag = tags[0].toLowerCase()

  // Define gradient mappings for common tags
  const gradientMap: Record<string, string> = {
    // AI/ML related
    ai: "bg-gradient-to-br from-purple-400 via-pink-400 to-red-400",
    "machine learning": "bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400",
    "deep learning": "bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400",
    "neural networks": "bg-gradient-to-br from-violet-400 via-purple-400 to-fuchsia-400",

    // Programming languages
    python: "bg-gradient-to-br from-blue-400 via-blue-500 to-yellow-400",
    javascript: "bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500",
    typescript: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700",
    java: "bg-gradient-to-br from-red-400 via-orange-400 to-red-500",
    "c++": "bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600",

    // Web development
    web: "bg-gradient-to-br from-cyan-400 via-blue-400 to-indigo-400",
    frontend: "bg-gradient-to-br from-pink-400 via-rose-400 to-red-400",
    backend: "bg-gradient-to-br from-green-400 via-emerald-400 to-teal-400",
    fullstack: "bg-gradient-to-br from-purple-400 via-violet-400 to-indigo-400",

    // Data science
    "data science": "bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-400",
    statistics: "bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400",
    analytics: "bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400",

    // Mathematics & Science
    mathematics: "bg-gradient-to-br from-indigo-400 via-blue-400 to-cyan-400",
    physics: "bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400",
    chemistry: "bg-gradient-to-br from-green-400 via-emerald-400 to-teal-400",
    biology: "bg-gradient-to-br from-green-400 via-lime-400 to-emerald-400",

    // General topics
    tutorial: "bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-400",
    research: "bg-gradient-to-br from-slate-400 via-gray-400 to-zinc-400",
    beginner: "bg-gradient-to-br from-green-300 via-emerald-300 to-teal-300",
    advanced: "bg-gradient-to-br from-red-400 via-rose-400 to-pink-400",
  }

  // Check for exact match
  if (gradientMap[primaryTag]) {
    return gradientMap[primaryTag]
  }

  // Check for partial match
  for (const [key, gradient] of Object.entries(gradientMap)) {
    if (primaryTag.includes(key) || key.includes(primaryTag)) {
      return gradient
    }
  }

  // Generate a consistent gradient based on tag hash
  const hash = primaryTag.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const gradients = [
    "bg-gradient-to-br from-rose-400 via-pink-400 to-fuchsia-400",
    "bg-gradient-to-br from-amber-400 via-orange-400 to-red-400",
    "bg-gradient-to-br from-lime-400 via-green-400 to-emerald-400",
    "bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-400",
    "bg-gradient-to-br from-violet-400 via-purple-400 to-indigo-400",
  ]

  return gradients[hash % gradients.length]
}
