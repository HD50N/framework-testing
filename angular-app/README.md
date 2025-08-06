# Angular Multi-Page Application

A beautiful, modern multi-page Angular application built with TypeScript, Tailwind CSS, and Angular Router.

## 🚀 Features

- **Fast Performance**: Built with Angular 19 for lightning-fast development and build times
- **Type Safety**: Full TypeScript support for better development experience
- **Modern Styling**: Tailwind CSS for responsive, utility-first styling
- **Angular Router**: File-based routing with Angular Router
- **Responsive Design**: Mobile-first design that works on all devices
- **Beautiful UI**: Modern, clean interface with smooth animations

## 📁 Project Structure

```
src/
├── app/
│   ├── navigation/
│   │   ├── navigation.html        # Navigation component template
│   │   └── navigation.ts          # Navigation component
│   ├── home/
│   │   ├── home.html             # Home page template
│   │   └── home.ts               # Home page component
│   ├── about/
│   │   ├── about.html            # About page template
│   │   └── about.ts              # About page component
│   ├── contact/
│   │   ├── contact.html          # Contact page template
│   │   └── contact.ts            # Contact page component
│   ├── app.html                  # Root app template
│   ├── app.ts                    # Root app component
│   └── app.routes.ts             # Routing configuration
├── styles.css                    # Global styles with Tailwind
└── index.html                    # HTML template
```

## 🛠️ Technology Stack

- **Angular 19** - Modern web framework
- **TypeScript** - Type-safe JavaScript
- **Angular Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Angular CLI** - Development tools

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd angular-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## 📝 Available Scripts

- `ng serve` - Start development server
- `ng build` - Build for production
- `ng test` - Run unit tests
- `ng lint` - Run linting
- `ng e2e` - Run end-to-end tests

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
- Angular Router integration

### Styling
- Tailwind CSS utility classes
- Custom gradients and shadows
- Smooth hover transitions
- Responsive breakpoints

### Form Handling
- Angular reactive forms
- Form validation
- Two-way data binding
- Template-driven forms

## 🔧 Configuration

### Angular Configuration
The project uses Angular 19 with standalone components:

```typescript
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
```

### Tailwind CSS
Tailwind CSS is configured with PostCSS:

```json
// .postcssrc.json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

### Routing
Angular Router configuration:

```typescript
// app.routes.ts
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
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
ng build --prod
```

This creates an optimized production build in the `dist/` directory.

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
ng build --prod
```

2. Upload the `dist/` folder to Netlify

## 🎯 Advantages of Angular

- **Powerful CLI**: Comprehensive tooling for development
- **Dependency Injection**: Built-in service architecture
- **TypeScript First**: Native TypeScript support
- **Enterprise Ready**: Scalable architecture for large applications
- **Rich Ecosystem**: Extensive library and tooling ecosystem

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Angular](https://angular.dev/) for the amazing web framework
- [Angular CLI](https://angular.dev/tools/cli) for the development tools
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) for type-safe development
