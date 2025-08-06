# Overview

This is a full-stack web application for a school website. The project is built as a modern educational institution website showcasing academics, faculty, student life, admissions, and school events. The application features a responsive design with smooth animations and professional presentation focused on educational services and community engagement.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type-safe component development
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with a custom design system featuring company-specific color variables (navy, forest, emerald, sky, charcoal, gold)
- **UI Components**: shadcn/ui component library built on Radix UI primitives for consistent, accessible interface elements
- **Animations**: Framer Motion for smooth page transitions and interactive animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development Server**: Custom Vite integration for seamless full-stack development
- **Storage Interface**: Abstract storage layer with in-memory implementation (prepared for database integration)
- **API Structure**: RESTful API endpoints with `/api` prefix routing

## Data Storage Architecture
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (via Neon Database serverless connection)
- **Schema Management**: Centralized schema definitions in shared directory
- **Migrations**: Drizzle Kit for database schema migrations
- **Validation**: Zod schemas integrated with Drizzle for runtime type validation

## Project Structure
- **Monorepo Design**: Client and server code in separate directories with shared schema
- **Path Aliases**: Configured TypeScript path mapping for clean imports (@, @shared, @assets)
- **Asset Management**: Dedicated attached_assets directory for static files
- **Environment Separation**: NODE_ENV-based configuration for development/production modes

## Authentication & Authorization
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **User Model**: Basic user schema with username/password authentication structure
- **Security**: Prepared authentication infrastructure (not fully implemented)

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Connection**: @neondatabase/serverless for optimized serverless connections

## UI & Design Systems
- **Radix UI**: Comprehensive primitive component library for accessibility
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Framer Motion**: Animation library for React components
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **TypeScript**: Full-stack type safety with strict configuration
- **ESBuild**: Fast bundling for production server builds

## Form Management
- **React Hook Form**: Form state management with @hookform/resolvers
- **Validation**: Zod integration for client-side form validation

The application is designed as a professional educational website with room for future expansion into student portals, online course management, parent communication systems, and event registration functionality.