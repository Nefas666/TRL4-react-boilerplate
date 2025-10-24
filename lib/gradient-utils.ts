export function getTagGradient(tags: string[] | null): string {
  if (!tags || tags.length === 0) {
    return "bg-gradient-to-br from-[#bec8f9]/30 via-[#a2eaf6]/30 to-[#c9e0dd]/30"
  }

  // Use first tag to determine gradient
  const primaryTag = tags[0].toLowerCase()

  // Define gradient mappings using the holographic palette colors
  // Colors: #bec8f9 (lavender), #a2eaf6 (sky blue), #c9e0dd (aqua), #fee17c (yellow), #1b2431 (navy)
  const gradientMap: Record<string, string> = {
    // AI/ML related - cool tones
    ai: "bg-gradient-to-br from-[#bec8f9]/40 via-[#a2eaf6]/40 to-[#c9e0dd]/30",
    "machine learning": "bg-gradient-to-br from-[#a2eaf6]/40 via-[#bec8f9]/40 to-[#c9e0dd]/30",
    "deep learning": "bg-gradient-to-br from-[#bec8f9]/50 via-[#a2eaf6]/40 to-[#bec8f9]/30",
    "neural networks": "bg-gradient-to-br from-[#bec8f9]/40 via-[#c9e0dd]/30 to-[#a2eaf6]/40",

    // Programming languages - varied palette
    python: "bg-gradient-to-br from-[#a2eaf6]/40 via-[#fee17c]/30 to-[#c9e0dd]/30",
    javascript: "bg-gradient-to-br from-[#fee17c]/40 via-[#fee17c]/30 to-[#c9e0dd]/20",
    typescript: "bg-gradient-to-br from-[#a2eaf6]/40 via-[#bec8f9]/40 to-[#1b2431]/20",
    java: "bg-gradient-to-br from-[#fee17c]/40 via-[#c9e0dd]/30 to-[#a2eaf6]/30",
    "c++": "bg-gradient-to-br from-[#1b2431]/30 via-[#bec8f9]/40 to-[#a2eaf6]/30",

    // Web development - bright and airy
    web: "bg-gradient-to-br from-[#a2eaf6]/40 via-[#c9e0dd]/40 to-[#bec8f9]/30",
    frontend: "bg-gradient-to-br from-[#bec8f9]/40 via-[#fee17c]/30 to-[#a2eaf6]/30",
    backend: "bg-gradient-to-br from-[#c9e0dd]/40 via-[#a2eaf6]/40 to-[#bec8f9]/30",
    fullstack: "bg-gradient-to-br from-[#bec8f9]/40 via-[#a2eaf6]/40 to-[#fee17c]/30",

    // Data science - aqua tones
    "data science": "bg-gradient-to-br from-[#c9e0dd]/40 via-[#a2eaf6]/40 to-[#bec8f9]/30",
    statistics: "bg-gradient-to-br from-[#a2eaf6]/40 via-[#bec8f9]/40 to-[#c9e0dd]/30",
    analytics: "bg-gradient-to-br from-[#c9e0dd]/40 via-[#a2eaf6]/30 to-[#fee17c]/20",

    // Mathematics & Science - cool professional
    mathematics: "bg-gradient-to-br from-[#bec8f9]/40 via-[#a2eaf6]/40 to-[#c9e0dd]/30",
    physics: "bg-gradient-to-br from-[#a2eaf6]/40 via-[#c9e0dd]/40 to-[#bec8f9]/30",
    chemistry: "bg-gradient-to-br from-[#c9e0dd]/40 via-[#a2eaf6]/30 to-[#fee17c]/20",
    biology: "bg-gradient-to-br from-[#c9e0dd]/40 via-[#fee17c]/30 to-[#a2eaf6]/30",

    // General topics - warm and inviting
    tutorial: "bg-gradient-to-br from-[#fee17c]/40 via-[#c9e0dd]/30 to-[#a2eaf6]/30",
    research: "bg-gradient-to-br from-[#1b2431]/20 via-[#bec8f9]/40 to-[#c9e0dd]/30",
    beginner: "bg-gradient-to-br from-[#fee17c]/30 via-[#c9e0dd]/40 to-[#a2eaf6]/30",
    advanced: "bg-gradient-to-br from-[#1b2431]/30 via-[#bec8f9]/40 to-[#a2eaf6]/40",

    // File types
    video: "bg-gradient-to-br from-[#a2eaf6]/40 via-[#bec8f9]/40 to-[#c9e0dd]/30",
    pdf: "bg-gradient-to-br from-[#fee17c]/30 via-[#c9e0dd]/40 to-[#bec8f9]/30",
    paper: "bg-gradient-to-br from-[#bec8f9]/40 via-[#c9e0dd]/30 to-[#fee17c]/20",
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

  // Generate a consistent gradient based on tag hash using palette colors
  const hash = primaryTag.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const gradients = [
    "bg-gradient-to-br from-[#bec8f9]/40 via-[#a2eaf6]/40 to-[#c9e0dd]/30",
    "bg-gradient-to-br from-[#a2eaf6]/40 via-[#c9e0dd]/40 to-[#fee17c]/30",
    "bg-gradient-to-br from-[#c9e0dd]/40 via-[#bec8f9]/40 to-[#a2eaf6]/30",
    "bg-gradient-to-br from-[#fee17c]/30 via-[#c9e0dd]/40 to-[#bec8f9]/30",
    "bg-gradient-to-br from-[#bec8f9]/40 via-[#fee17c]/30 to-[#a2eaf6]/40",
  ]

  return gradients[hash % gradients.length]
}
