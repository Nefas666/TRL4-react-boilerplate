// Tag color mapping using site palette
export const tagColorMap: Record<string, string> = {
  // Soil & Agriculture
  soil: "bg-[#c9e0dd] text-[#1b2431]",
  agriculture: "bg-[#fee17c] text-[#1b2431]",
  regenerative: "bg-[#bec8f9] text-[#1b2431]",
  farming: "bg-[#a2eaf6] text-[#1b2431]",

  // Technology & AI
  ai: "bg-[#bec8f9] text-[#1b2431]",
  technology: "bg-[#a2eaf6] text-[#1b2431]",
  mapping: "bg-[#c9e0dd] text-[#1b2431]",

  // Climate & Environment
  climate: "bg-[#fee17c] text-[#1b2431]",
  biodiversity: "bg-[#c9e0dd] text-[#1b2431]",
  sustainability: "bg-[#bec8f9] text-[#1b2431]",

  // Policy & Funding
  policy: "bg-[#1b2431] text-white",
  funding: "bg-[#fee17c] text-[#1b2431]",
  entrepreneurship: "bg-[#a2eaf6] text-[#1b2431]",

  // Education
  education: "bg-[#bec8f9] text-[#1b2431]",
  research: "bg-[#c9e0dd] text-[#1b2431]",
}

// Get color for a tag, with fallback to a default based on hash
export function getTagColor(tag: string): string {
  const normalizedTag = tag.toLowerCase().trim()

  // Check for exact match
  if (tagColorMap[normalizedTag]) {
    return tagColorMap[normalizedTag]
  }

  // Check for partial match
  for (const [key, color] of Object.entries(tagColorMap)) {
    if (normalizedTag.includes(key) || key.includes(normalizedTag)) {
      return color
    }
  }

  // Fallback: use hash to pick a color from palette
  const colors = [
    "bg-[#bec8f9] text-[#1b2431]",
    "bg-[#a2eaf6] text-[#1b2431]",
    "bg-[#c9e0dd] text-[#1b2431]",
    "bg-[#fee17c] text-[#1b2431]",
  ]

  const hash = normalizedTag.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return colors[hash % colors.length]
}

// Get all unique tags from resources
export function getAllTags(resources: Array<{ tags?: string[] }>): string[] {
  const tagSet = new Set<string>()
  resources.forEach((resource) => {
    resource.tags?.forEach((tag) => tagSet.add(tag))
  })
  return Array.from(tagSet).sort()
}
