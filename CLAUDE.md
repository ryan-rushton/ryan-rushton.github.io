# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Terminal-themed personal portfolio website built with Vite, TypeScript, and vanilla CSS. Deployed to GitHub Pages at https://ryan-rushton.github.io/.

**Branch structure:**
- `main` - main development branch (default)
- GitHub Actions deploys directly from workflow artifacts (no deployment branch needed)

## Development Commands

### Setup
```bash
npm install  # Install dependencies
```

### Development
```bash
npm run dev      # Start Vite dev server on localhost:5173 with HMR
npm run build    # TypeScript check + Vite production build → dist/
npm run preview  # Preview production build locally
```

### Deploy
```bash
npm run deploy   # Deploy dist/ to master branch via gh-pages
```

Note: CI/CD workflow handles deployment automatically on pushes to `main` branch.

## Architecture

### Technology Stack
- **Build Tool:** Vite 6.0 (lightning-fast dev server, optimized builds)
- **Language:** TypeScript (strict mode, modern ES2020 target)
- **Styling:** Vanilla CSS with CSS custom properties
- **Font:** Fira Code (loaded from CDN, ligatures enabled)
- **Theme:** Modern dark terminal inspired by Starship prompt

### Project Structure
```
├── index.html           # Entry HTML (Vite loads /src/main.ts from here)
├── src/
│   ├── main.ts         # Terminal logic, command system, interactions
│   └── style.css       # Terminal theme, colors, animations
├── public/             # Static assets (copied to dist/ as-is)
│   ├── .nojekyll       # Required for GitHub Pages
│   └── *.svg, *.html   # Favicon, verification files
└── vite.config.ts      # Vite configuration
```

### Terminal Interface Design

**Visual Theme:**
- Modern dark terminal aesthetic (Starship-inspired color palette)
- Fira Code monospace font with programming ligatures enabled
- Color scheme uses CSS custom properties in `:root`:
  - Background: `--bg-primary` (#0d1117), `--bg-secondary` (#161b22)
  - Text: `--text-primary` (light), `--text-secondary` (dim)
  - Accents: `--color-blue`, `--color-cyan`, `--color-green`, `--color-yellow`, etc.
- Terminal window with macOS-style header (close/minimize/maximize buttons)
- Custom scrollbar styling for consistency

**Interactive Terminal (`src/main.ts`):**
- Command-based interaction system (type `help` for available commands)
- Commands defined in `commands` object with `description` and `execute()` function
- Built-in commands: `help`, `about`, `skills`, `experience`, `contact`, `projects`, `clear`, `banner`
- Tab completion for commands
- Input handling with keyboard events (Enter to submit, Tab to autocomplete)
- Auto-focus on terminal input for seamless UX
- Dynamic content rendering with escape-safe HTML output

**Key Implementation Details:**
- `addLine()`: Appends output to terminal with fade-in animation, auto-scrolls
- `executeCommand()`: Parses input, executes matching command, shows error if not found
- Prompt format: `➜ ryan@rushton` (uses Starship-style arrow icon)
- HTML escaping for user input to prevent XSS
- Banner displayed on load with ASCII art

### Color System

The color palette is defined in `src/style.css` using CSS custom properties:
```css
--color-blue: #58a6ff    /* Info, links */
--color-cyan: #39c5cf    /* Prompt, input caret */
--color-green: #3fb950   /* Success, accents */
--color-yellow: #d29922  /* Warnings, section headers */
--color-red: #f85149     /* Errors */
--color-purple: #bc8cff  /* Highlights, ASCII art */
```

Usage: Apply via utility classes (`.command`, `.success`, `.error`, `.info`, `.highlight`) or inline styles.

## Code Quality

### TypeScript Configuration
- Strict mode enabled (`strict: true`)
- Modern target: ES2020
- Bundler module resolution (Vite-optimized)
- Additional strictness: `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`

### Styling Conventions
- CSS custom properties for all colors/theme values (enables easy theme switching)
- BEM-like naming for components (`.terminal-window`, `.terminal-header`, etc.)
- Utility classes for text colors (`.command`, `.success`, `.error`)
- CSS animations defined with `@keyframes` (e.g., `fadeIn`, `blink`)
- Font ligatures enabled via `font-feature-settings: 'liga' 1, 'calt' 1`

## CI/CD

### GitHub Actions Workflows
1. **Build+Deploy** (`.github/workflows/deploy-pages.yml` on push to `main`):
   - Setup Node 20.x + pnpm 9.1.0
   - Install dependencies (`pnpm install --frozen-lockfile`)
   - Build (`pnpm build` → TypeScript check + Vite build)
   - Upload build artifact to GitHub
   - Deploy using official `actions/deploy-pages@v4`
   - No deployment branch needed - uses GitHub Pages artifacts

2. **PR Build** (`.github/workflows/pr-build.yml` on pull requests):
   - Same build steps without deployment
   - Validates TypeScript and build succeed

### Deployment Process
Vite builds to `dist/` directory. The workflow uploads `dist/` as a GitHub Pages artifact, then GitHub Pages deploys it directly. This modern approach uses GitHub Actions workflows instead of branch-based deployment. The `.nojekyll` file (in `public/`, copied to `dist/`) ensures Vite's generated files (including underscore-prefixed files) are served correctly.
