# Backup Bar Website

Marketing site for Backup Bar at backupbar.app.

## Commands

```bash
npm run dev    # Dev server
npm run build  # Production build
npm run lint   # ESLint
```

## Stack

- Next.js 16 (App Router), React 18, TypeScript, Tailwind CSS
- Fully static site (no API routes, no server dependencies)

## Architecture

```
app/
  page.tsx            # Homepage (hero, how it works, features, LED explainer, FAQ)
  download/           # Download instructions
  guide/              # User documentation
  support/            # Support links (email, GitHub Issues) & FAQ
  privacy/            # Privacy policy
  terms/              # Terms of service
components/
  ThemeProvider.tsx    # Dark/light theme context
  ThemeToggle.tsx      # Theme toggle button
  Navbar.tsx           # Shared navigation
  Footer.tsx           # Shared footer
  LEDIndicator.tsx     # Reusable LED glow component
  MenuBarMockup.tsx    # Hero section macOS mockup
public/
  favicon files, og-image, app icons
```

## Styling

- Tailwind with `darkMode: 'class'`
- Custom color palette: safe (green), danger (red)
- Dark mode is the default
- LED glow effects via CSS box-shadow and keyframe animations

## Notes

- Free and open source app (MIT License)
- No pricing section, no fake testimonials
- Green/red LED visual metaphor drives the design
- SEO metadata configured with `metadataBase: https://backupbar.app`
- Support contact via mailto:d@nielwhite.com
