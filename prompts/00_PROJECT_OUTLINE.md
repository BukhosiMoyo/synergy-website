# Synergy Evolution — Next.js Frontend Rebuild (Outline)

You are a senior frontend engineer working inside a Next.js App Router project.

GOAL:
Implement the foundational UI system for Synergy Evolution:
- Class-based dark mode (persistent)
- Brand theme tokens
- Global layout improvements
- MotionProvider wrapper
- Clean metadata structure
- Executive typography baseline

CONSTRAINTS:
- Do NOT remove existing structure.
- Modify files safely.
- Keep everything performant and clean.
- Do not build page sections yet.
- Only implement global foundation.

--------------------------------
PART A — DARK MODE (CLASS-BASED)
--------------------------------

1) Configure Tailwind dark mode to use class strategy in tailwind.config.ts:
darkMode: "class"

2) Create a persistent theme system:
- If user preference exists in localStorage, use it.
- Otherwise, default to system preference.
- Apply class to <html> element.

3) Implement ThemeToggle.tsx:
- Simple toggle button
- Switches between dark and light
- Updates localStorage
- Smooth transition

--------------------------------
PART B — GLOBAL THEME TOKENS
--------------------------------

In src/styles/theme.css define CSS variables:

:root {
  --color-primary: #0b1e3a;        /* premium navy */
  --color-accent: #0ea5a5;         /* teal */
  --color-bg-light: #f8fafc;
  --color-bg-dark: #0a0f1a;
  --color-text-light: #0f172a;
  --color-text-dark: #f1f5f9;
}

.dark {
  --color-bg-light: #0a0f1a;
  --color-text-light: #f1f5f9;
}

Ensure globals.css imports theme.css.

--------------------------------
PART C — LAYOUT REFINEMENT
--------------------------------

Update src/app/layout.tsx:

- Wrap children with MotionProvider
- Add Header + Footer
- Add smooth background transition
- Apply bg + text variables properly
- Configure metadata base:

export const metadata = {
  title: {
    default: "Synergy Evolution | Asset Management Specialists",
    template: "%s | Synergy Evolution"
  },
  description: "Public and private sector asset management specialists delivering audit-ready compliance and governance frameworks."
}

--------------------------------
PART D — MOTION BASE
--------------------------------

In src/components/motion:

1) Create MotionProvider.tsx
- Wrap children in <AnimatePresence>
- Use mode="wait"

2) Create motionPresets.ts with:
- fadeInUp
- fadeIn
- slideInLeft
- slideInRight

Use subtle timing:
duration: 0.6
ease: [0.22, 1, 0.36, 1]

--------------------------------
PART E — BASE UI REFINEMENT
--------------------------------

Refine:
- Button.tsx (primary + outline variant)
- Container.tsx (max-w-7xl centered)
- Section.tsx (py-20 responsive)
- Card.tsx (rounded-xl, soft shadow, hover lift)

No heavy styling yet.
Keep it executive and minimal.

--------------------------------
OUTPUT
--------------------------------

1) List modified files.
2) Confirm dark mode persistence works.
3) Confirm MotionProvider wraps layout.
4) Do not proceed to page building.