

## Plan: "Ooty Turns Purple" Hero Banner Redesign

### What changes
1. **Copy uploaded Jacaranda images** into `src/assets/` (select 1 primary hero image + keep others for potential gallery use)
2. **Update Hero.tsx** text from "Discover Ooty's / Hidden Treasures" to "Ooty Turns / Purple" with enhanced purple-themed styling
3. **Enhance contrast** — stronger gradient overlay optimized for purple/lavender backgrounds, bolder text shadows for legibility against the light purple tones
4. **Update the tagline badge** to match the purple Jacaranda season theme (e.g., "Jacaranda Season in the Nilgiris")
5. **Adjust subtitle text** to reference the seasonal purple bloom

### Image selection
- Use `IMG_20260409_210736_783.jpg.jpeg` (the wide mountain view with Jacaranda trees framing both sides) as the primary hero — best composition for a wide banner with center space for text overlay
- Copy 2-3 additional images as potential secondary assets

### Styling changes
- Stronger dark gradient overlay (`from-foreground/80 via-foreground/60`) to ensure white text pops against the pastel purple backgrounds
- Add text-shadow utilities for extra legibility
- Change the golden accent color on "Purple" to an actual purple/violet tone (`text-purple-400` or custom)
- Keep the existing layout structure and button arrangement intact

### Files modified
- `src/components/Hero.tsx` — text + gradient + accent color
- `src/pages/Index.tsx` — import new hero image
- New assets copied to `src/assets/`

