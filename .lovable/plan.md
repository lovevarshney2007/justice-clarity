

# AI-Powered Legal Document Simplifier — "Miles Matrix | Legal AI"

## Design Foundation
- **Theme:** Dark premium glassmorphic UI with Deep Navy Blue (`#0B132B`) background, white glass surfaces (5-10% opacity + blur), gold/orange (`#F5A623`) accents
- **Typography:** Plus Jakarta Sans for headings, Inter for body text
- **Motion:** Framer Motion for fade-in/slide-up entrances, smooth hover elevations, pulsing loader states

## Page Structure

### 1. Navbar
- Left: "Miles Matrix | Legal AI" logo text with subtle gold accent
- Right: "Login" button with glowing gold hover effect
- Glass background with backdrop blur, sticky top

### 2. Hero Section
- Bold gradient headline (white → gold): "Simplifying Justice for Every Citizen."
- Subtitle in cool gray with description of the AI tool
- Animated entrance: fade-in + slide-up on load

### 3. Interactive Upload Zone
- Large dashed-border drag & drop area with glass card styling
- Glowing upload icon (Lucide `Upload` icon) with gentle pulse animation
- Text: "Drag & drop your legal PDF here or click to browse"
- Click triggers simulated processing state: futuristic circular loader with "Scanning & Processing" text, auto-completes after ~3 seconds to reveal the results dashboard

### 4. Results Dashboard (appears after simulated upload)
- **Language Toggle:** English/Hindi switch at the top with smooth transition
- **Left Column (1/3):** Three stacked glass cards with icons:
  - Case Date (Calendar icon) — "15th March, 2023"
  - Judge Name (User icon) — "Hon'ble Justice R.K. Sharma"
  - IPC Sections (Scale icon) — "Section 302, 307, 120B"
- **Right Column (2/3):** Large AI Summary card with subtle glowing gold border, displaying a dummy simplified legal summary with generous spacing
- **Bottom Section:** Horizontal scrolling row of "Similar Past Cases" cards with gold match percentage badges (85%, 78%, 72%, etc.)

### 5. Responsiveness
- Full responsive layout: stacks vertically on mobile, grid on desktop
- All cards use rounded-2xl, glass blur, soft shadows

## Technical Notes
- Install `framer-motion` and Google Fonts (Plus Jakarta Sans, Inter)
- All data is dummy/hardcoded — no backend needed
- Single-page app with state management via React useState for upload flow and language toggle

