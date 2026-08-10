export type Project = { name: string; description: string; stack: string[]; href: string; tone: string };
export type LinkItem = { label: string; href: string };

export const navigation = [
  { label: "Index", href: "#index" },
  { label: "Projects", href: "#projects" },
  { label: "Notes", href: "#principles" },
  { label: "Support", href: "#support" },
];

export const projects: Project[] = [
  { name: "memory-sync", description: "Keeps one set of AI coding rules synchronized across multiple tools, with both a CLI and desktop app.", stack: ["Rust", "Tauri", "TypeScript"], href: "https://github.com/TrueNine/memory-sync", tone: "coral" },
  { name: "compose-server", description: "Reusable backend components for Kotlin and Spring applications, shaped for teams that value clear boundaries.", stack: ["Kotlin", "Spring Boot"], href: "https://github.com/TrueNine/compose-server", tone: "blue" },
  { name: "compose-client", description: "A practical collection of frontend tooling and components for modern web applications.", stack: ["TypeScript", "Vue"], href: "https://github.com/TrueNine/compose-client", tone: "lime" },
];

export const principles = [
  ["01", "Accessibility by default", "Software should remain understandable and operable with assistive technology."],
  ["02", "Maintainable systems", "Strong boundaries, explicit contracts, and code that survives beyond the first release."],
  ["03", "Test-driven development", "Feedback should arrive early, before mistakes become architecture."],
  ["04", "Practical AI workflows", "AI should improve engineering judgment, not replace it."],
  ["05", "Sustainable open source", "Shared tools get better when knowledge and improvements flow back to the community."],
] as const;

export const toolbox = [
  ["Backend", "Kotlin", "Spring Boot", "Ktor", "PostgreSQL", "Redis"],
  ["Frontend", "TypeScript", "Vue", "Nuxt", "UnoCSS", "Vite"],
  ["Desktop", "Rust", "Tauri"],
  ["Workflow", "TDD", "Clean Architecture", "Git", "Docker", "Gradle"],
  ["AI tools", "Codex", "Claude Code", "Cursor", "Hermes Agent", "OpenCode"],
] as const;

export const supporters: LinkItem[] = [
  { label: "one-eyed-fish / tdd-skill", href: "https://github.com/one-eyed-fish/tdd-skill" },
  { label: "zjarlin", href: "https://github.com/zjarlin" },
  { label: "LiTeXz", href: "https://github.com/LiTeXz" },
  { label: "WhoFish0015", href: "https://github.com/WhoFish0015" },
];

export const communities: LinkItem[] = [
  { label: "Jimmer ORM", href: "https://github.com/babyfish-ct/jimmer" },
  { label: "Spring Framework", href: "https://spring.io/" },
  { label: "Vue.js", href: "https://vuejs.org/" },
  { label: "Kotlin", href: "https://kotlinlang.org/" },
  { label: "NVDA", href: "https://github.com/nvaccess/nvda" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "Bilibili", href: "https://bilibili.com/" },
];
