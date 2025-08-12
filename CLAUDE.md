# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Package Manager**: Use pnpm (specified in package.json)

**Core Commands**:
- `pnpm dev` - Start development server with Turbo
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues
- `pnpm prettier` - Check code formatting
- `pnpm prettier:fix` - Fix code formatting

**Testing**:
- `pnpm test` - Run Jest unit tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:coverage` - Generate test coverage report
- `pnpm e2e:headless` - Run Playwright E2E tests headless
- `pnpm e2e:ui` - Run Playwright E2E tests with UI

## Architecture

**Tech Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Radix UI, Zustand

**Key Directories**:
- `app/` - Next.js App Router pages and API routes
- `src/design-system/` - Centralized design system with tokens, components, and utilities
- `components/` - Legacy components (Button, Counter, Tooltip)
- `store/` - Zustand state management stores
- `e2e/` - Playwright end-to-end tests

**Design System Structure**:
The codebase uses a comprehensive design system located in `src/design-system/`:
- `tokens/` - Design tokens (colors, typography, spacing)
- `components/ui/` - 80+ reusable UI components
- `components/` - Main application components (auction-card, property-card, etc.)
- `utils/cn.ts` - Tailwind class merging utility

**Import Patterns**:
- Use `@/design-system` for design system imports
- Path aliases configured: `@/*` maps to project root
- Design system exports all components through `src/design-system/index.ts`

**State Management**: Zustand stores in `store/` directory. Example: `useCounterStore` for counter functionality.

**Styling**: 
- Tailwind CSS v4 with custom design tokens
- Primary color: `#FEDA03` (yellow)
- Dark theme: `#040405`
- Components use Class Variance Authority (CVA) for consistent variants

**Testing Setup**:
- Jest with React Testing Library for unit tests
- Playwright for E2E tests (runs on http://127.0.0.1:3000)
- Test files: `*.test.tsx` and `*.spec.ts`

**Auction Platform Features**:
This is a Brazilian auction platform ("Lailo") specializing in real estate and vehicles with advanced filtering, multiple view modes, and responsive design.