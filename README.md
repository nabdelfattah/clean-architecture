# clean-architecture

A scalable Clean Architecture boilerplate structure for Next.js frontend projects. Serves as a reusable starting point with a predefined folder structure for maintainability and separation of concerns.

### 🚀 Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Feature-Based Architecture
- Atomic Design Pattern
- Modular Service Layer

### 📁 Project Structure

```
src/
├── app/                     # Next.js App Router layer
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
│
├── animations/              # Reusable animation logic (e.g., floating effects)
│
├── assets/                  # Static & design-related resources
│   ├── icons/               # Centralized icon exports
│   ├── images/              # Centralized image exports
│   └── lottie/              # JSON animation files
│
├── components/              # Atomic Design structure
│   ├── atoms/               # Small reusable UI elements (Button, Text, Title, Tag)
│   ├── molecules/           # Composed UI blocks (e.g., doctor-card)
│   ├── organisms/           # Larger UI sections (Header, Footer, Auth Header)
│   └── template/            # Layout-level compositions (Auth Layout, Public Layout)
│
├── modules/                 # Feature-Based Architecture (self-contained features)
│   └── auth/                # Example feature module
│       ├── api/             # Feature-specific API logic
│       ├── components/      # Feature UI components
│       ├── hooks/           # Feature custom hooks and React query hooks
│       ├── types/           # Feature TypeScript types
│       └── utils/           # Feature utilities
│
├── services/                # API communication & external integrations
│   ├── api-client.ts        # API abstraction layer
│   ├── axios-config.ts      # Axios configuration
│   └── token-service.ts     # Token handling logic
│
├── providers/               # Global React providers
│   ├── app-providers.tsx    # Wraps all global providers
│   ├── i18n-provider.tsx    # Internationalization setup
│   └── theme-provider.tsx   # Theme configuration
│
├── core/                    # Shared foundational UI states
│   └── ui-states/           # Loading, Not Found, etc.
│
├── lib/                     # Reusable shared utilities
│   └── cn.ts                # Tailwind class merging helper
│
├── config/                  # Environment & application configuration
│
├── styles/                  # Global design tokens & CSS variables
│
├── types/                   # Global TypeScript declarations
│
└── utils/                   # Generic reusable helper functions
```

### 🏗 Architecture Philosophy

This boilerplate follows:

- Clear separation of concerns
- Feature-first modular design
- Atomic UI structure
- Centralized service layer
- Scalable folder organization
- Maintainable codebase for long-term projects

### 🎯 Purpose

This repository is intended to:

- Serve as a fallback starter structure for new frontend projects
- Reduce setup time
- Enforce architectural consistency
- Improve long-term maintainability
