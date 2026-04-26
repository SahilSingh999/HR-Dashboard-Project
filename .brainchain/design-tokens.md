# 🎨 Design Tokens

These tokens establish the foundational aesthetic of the Crextio Dashboard.

## Typography
- **Headings:** `var(--font-red-hat-display)`
  - Weights: `700` (Bold)
- **Body Content:** `var(--font-poppins)`
  - Weights: `500` (Medium), `400` (Regular for small text)

## Color Palette (Light Mode Target)
*Map these to Tailwind `globals.css` CSS variables.*

- **Background:** Soft, warm gradient.
  - Base: `#FDFBF7` (Cream)
  - Gradient Accent: `#FCEECB` (Pale Yellow/Gold)
- **Primary Accent:** `#FACC15` (Vibrant Yellow) - *Used for active progress bars, highlighting, active states.*
- **Surface/Card:**
  - Standard Card: `#FFFFFF` with slight transparency (`bg-white/80` or `bg-white/90`) and backdrop blur.
  - Dark Inset Card: `#27272A` (Charcoal) - *Used for the Onboarding Task section.*
- **Text:**
  - Primary (Headings): `#18181B` (Zinc 900)
  - Secondary (Muted): `#71717A` (Zinc 500)
- **Dark Mode Targets:**
  - Background: `#09090B` (Zinc 950)
  - Surface/Card: `#18181B` (Zinc 900)
  - Dark Inset Card: `#27272A` (Zinc 800)

## Spacing & Radius
- **Border Radius:** Heavy use of large, soft corners.
  - Main Cards: `rounded-[2rem]` or `rounded-3xl`
  - Inner Elements: `rounded-2xl`, `rounded-full`
- **Shadows:** Soft, dispersed shadows to lift cards off the background.
  - `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`

## Animation Definitions (Framer Motion)
- **Transitions:** `type: "spring", stiffness: 300, damping: 30`
- **Hover Effects:** Gentle scale-up `scale: 1.02`
