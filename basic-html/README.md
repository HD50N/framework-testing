# Basic HTML App

A clean, modern multi-page HTML application demonstrating the same design and functionality as the other framework implementations in this repository.

## Features

- **Multi-page navigation** - Home, About, and Contact pages
- **Responsive design** - Works on desktop, tablet, and mobile
- **Modern UI** - Styled with Tailwind CSS via CDN
- **Interactive contact form** - Working form with JavaScript validation
- **Semantic HTML** - Clean, accessible markup
- **No build tools** - Pure HTML, CSS, and JavaScript

## Technology Stack

- **HTML5** - Semantic markup and structure
- **CSS3** - Styling and animations
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Vanilla JavaScript** - Form interactions and basic functionality

## Getting Started

### Option 1: Python Server (Recommended)
```bash
# Navigate to the project directory
cd basic-html

# Start a local server (Python 3)
python3 -m http.server 3000

# Or Python 2
python -m http.server 3000

# Open http://localhost:3000 in your browser
```

### Option 2: NPM Scripts
```bash
# Install dependencies (optional)
npm install

# Start development server
npm run dev

# Or use serve directly
npm run serve
```

### Option 3: Open Files Directly
You can also open the HTML files directly in your browser:
- Open `index.html` in your web browser
- Navigate between pages using the navigation menu

## Project Structure

```
basic-html/
├── index.html          # Home page (blue gradient)
├── about.html          # About page (green gradient) 
├── contact.html        # Contact page (purple gradient)
├── package.json        # Project configuration
└── README.md          # This file
```

## Design Consistency

This implementation follows the same design system as other frameworks in this repository:

- **Home Page**: Blue gradient background with feature showcase
- **About Page**: Green gradient background with mission and tech stack
- **Contact Page**: Purple gradient background with contact form
- **Navigation**: Clean white header with blue accent colors
- **Cards**: White background with subtle shadows and rounded corners

## Wizard Compatibility

This basic HTML implementation is compatible with the HumanBehavior SDK wizard. The wizard will:

1. **Detect** it as a "vanilla" framework
2. **Inject** the SDK script via CDN in the HTML `<head>` section
3. **Initialize** the tracker with the provided API key
4. **Create** environment files for configuration

To test with the wizard:
```bash
# From the humanbehavior-js directory
node dist/cli/auto-install.js your-api-key --project ../framework-testing/basic-html
```

## Features Implemented

### Navigation
- Responsive navigation bar
- Active page highlighting
- Mobile menu button (placeholder)
- Clean, modern design

### Home Page
- Hero section with call-to-action buttons
- Feature cards with icons
- Consistent blue gradient background

### About Page
- Mission statement section
- Technology stack and features lists
- Two-column grid layout
- Green gradient background

### Contact Page
- Working contact form with validation
- Form submission handling
- Contact information cards
- Business hours display
- Purple gradient background

## Browser Support

This application works in all modern browsers including:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

MIT License - Feel free to use this code for learning and comparison purposes. 