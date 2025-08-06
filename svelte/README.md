# Svelte Multi-Page Application

A beautiful, modern multi-page Svelte application built with TypeScript, Tailwind CSS, and SvelteKit.

## 🚀 Features

- **Fast Performance**: Built with Svelte 5 for lightning-fast development and build times
- **Type Safety**: Full TypeScript support for better development experience
- **Modern Styling**: Tailwind CSS for responsive, utility-first styling
- **SvelteKit Routing**: File-based routing with SvelteKit
- **Responsive Design**: Mobile-first design that works on all devices
- **Beautiful UI**: Modern, clean interface with smooth animations

## 📁 Project Structure

```
src/
├── lib/
│   └── Navigation.svelte        # Navigation component
├── routes/
│   ├── about/
│   │   └── +page.svelte        # About page
│   ├── contact/
│   │   └── +page.svelte        # Contact page with form
│   ├── +layout.svelte          # Root layout with navigation
│   └── +page.svelte            # Home page
├── app.css                     # Global styles with Tailwind
└── app.html                    # HTML template
```

## 🛠️ Technology Stack

- **Svelte 5** - Modern reactive framework
- **TypeScript** - Type-safe JavaScript
- **SvelteKit** - Full-stack framework with routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd svelte
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run TypeScript type checking
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
- SvelteKit file-based routing

### Styling
- Tailwind CSS utility classes
- Custom gradients and shadows
- Smooth hover transitions
- Responsive breakpoints

### Form Handling
- Svelte reactive bindings
- Form validation
- State management with Svelte stores
- Client-side interactivity

## 🔧 Configuration

### SvelteKit Configuration
The project uses SvelteKit with file-based routing:

```typescript
// svelte.config.js
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};

export default config;
```

### Tailwind CSS
Tailwind CSS is configured with PostCSS:

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
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

This creates an optimized production build in the `.svelte-kit` directory.

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

2. Upload the `.svelte-kit` folder to Netlify

## 🎯 Advantages of Svelte

- **Smaller Bundle Size**: Svelte compiles to vanilla JavaScript
- **Better Performance**: No virtual DOM overhead
- **Less Code**: Reactive declarations and statements
- **True Reactivity**: Automatic reactivity without hooks
- **TypeScript Support**: Full TypeScript integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Svelte](https://svelte.dev/) for the amazing reactive framework
- [SvelteKit](https://kit.svelte.dev/) for the full-stack framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the fast build tool
