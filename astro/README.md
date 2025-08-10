# Astro Framework Example

This is a demonstration of how to build a modern web application using **Astro**, showcasing the framework's capabilities for creating fast, static websites.

## Features

- **Home Page** - Welcome page with feature cards showcasing Astro's benefits
- **About Page** - Information about the application and technology stack
- **Contact Page** - Contact form and information with social media links
- **Navigation** - Responsive navigation with active state highlighting
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS** - Modern, responsive styling with utility classes
- **Static Site Generation** - Zero JavaScript by default for optimal performance

## Technology Stack

- **Astro** - Static site generator with component islands
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable UI components
│   └── Navigation.astro
├── layouts/        # Page layouts
│   └── Layout.astro
├── pages/          # Route pages
│   ├── index.astro    # Home page
│   ├── about.astro    # About page
│   └── contact.astro  # Contact page
└── styles/         # Global styles
    └── global.css
```

## Key Astro Features Demonstrated

### Zero JavaScript by Default
Astro ships zero JavaScript to the browser by default, resulting in faster page loads and better performance.

### Component Islands
You can use any UI framework you want (React, Vue, Svelte, etc.) and only load JavaScript when needed.

### Content-First Approach
Built for content-heavy websites with excellent markdown and MDX support.

### Static Site Generation
Pre-renders pages at build time for optimal performance and SEO.

## Design System

This application follows the same design system as other framework examples:
- **Home**: Blue gradient background with feature showcase
- **About**: Green gradient background with mission and tech stack
- **Contact**: Purple gradient background with contact form
- **Navigation**: Clean white header with blue accent colors

## Performance Benefits

- **Fast Loading**: Static HTML with no JavaScript overhead
- **SEO Optimized**: Pre-rendered content for search engines
- **Accessible**: Semantic HTML structure
- **Responsive**: Mobile-first design with Tailwind CSS

## Learn More

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## License

MIT License - feel free to use this code for learning and comparison purposes.
