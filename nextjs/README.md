# Next.js Multi-Page Application

A beautiful, modern multi-page Next.js application built with TypeScript, Tailwind CSS, and the App Router.

## 🚀 Features

- **Fast Development**: Built with Next.js 14 for lightning-fast development and build times
- **Type Safety**: Full TypeScript support for better development experience
- **Modern Styling**: Tailwind CSS for responsive, utility-first styling
- **App Router**: Next.js 14 App Router for file-based routing
- **Responsive Design**: Mobile-first design that works on all devices
- **Beautiful UI**: Modern, clean interface with smooth animations

## 📁 Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page with form
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with navigation
│   └── page.tsx              # Home page
└── components/
    └── Navigation.tsx        # Navigation component
```

## 🛠️ Technology Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **App Router** - File-based routing system
- **Server Components** - Default server-side rendering

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Pages

### Home Page (`/`)
- Hero section with call-to-action buttons
- Feature cards showcasing the technology stack
- Responsive grid layout

### About Page (`/about`)
- Mission statement and company information
- Technology stack overview
- Feature highlights

### Contact Page (`/contact`)
- Contact form with validation
- Contact information display
- Business hours
- Responsive two-column layout

## 🎯 Key Features

### Navigation
- Responsive navigation bar
- Active page highlighting
- Mobile-friendly design

### Styling
- Tailwind CSS utility classes
- Custom gradients and shadows
- Smooth hover transitions
- Responsive breakpoints

### Form Handling
- Controlled form inputs
- Form validation
- State management with React hooks
- Client-side interactivity

## 🔧 Configuration

### Next.js Configuration
The project uses Next.js 14 with the App Router:

```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

export default nextConfig;
```

### Tailwind CSS
Tailwind CSS is configured with PostCSS:

```javascript
// postcss.config.mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
```

## 📱 Responsive Design

The application is built with a mobile-first approach and includes:

- Responsive navigation
- Flexible grid layouts
- Adaptive typography
- Touch-friendly buttons and forms

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build.

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Upload the `.next` folder to Netlify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vercel](https://vercel.com/) for the deployment platform
- [React](https://reactjs.org/) for the amazing UI library
