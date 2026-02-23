# Receipt Scanner Marketing Website

A modern, responsive marketing website for the Receipt Scanner iOS app built with React, Vite, and TailwindCSS.

## Features

- 🎨 Modern, clean design inspired by successful app landing pages
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Vite
- 🎭 Smooth animations and transitions
- 🧩 Component-based architecture
- 🎯 SEO-optimized

## Sections

1. **Hero** - Eye-catching headline with download CTA
2. **Features** - 6 key features with icons
3. **Categories** - Visual showcase of auto-organized folders
4. **How It Works** - 3-step process explanation
5. **Testimonials** - User reviews and feedback
6. **FAQ** - Expandable frequently asked questions
7. **Download** - Final CTA with App Store link
8. **Footer** - Branding and copyright

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Navigate to the website directory
cd website

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build
```

The build output will be in the `dist` directory.

### Preview Production Build

```bash
# Preview the production build locally
npm run preview
```

## Deployment Options

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`

### Option 3: GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "vite build && gh-pages -d dist"

# Deploy
npm run deploy
```

### Option 4: Custom Server

Upload the contents of the `dist` folder to your web server.

## Customization

### Update App Store Link

In `src/App.jsx`, update the download link:

```jsx
<a 
  href="https://apps.apple.com/app/YOUR-APP-ID" 
  target="_blank"
  rel="noopener noreferrer"
>
```

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Add Google Play Store Button

In the download sections, add:

```jsx
<a 
  href="https://play.google.com/store/apps/details?id=YOUR-APP-ID"
  className="inline-flex items-center..."
>
  {/* Google Play icon and text */}
</a>
```

### Update Content

All content is in `src/App.jsx`:
- Features array
- Categories array
- Testimonials array
- FAQ array

### Add Analytics

Add Google Analytics or other tracking in `index.html`:

```html
<head>
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  </script>
</head>
```

## SEO Optimization

### Update Meta Tags

Edit `index.html`:

```html
<meta name="description" content="Your custom description" />
<meta property="og:title" content="Receipt Scanner" />
<meta property="og:description" content="Your description" />
<meta property="og:image" content="URL to preview image" />
<meta name="twitter:card" content="summary_large_image" />
```

### Add Sitemap

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Add robots.txt

Create `public/robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

## Performance Tips

- Images should be optimized (use WebP format)
- Add lazy loading for images below the fold
- Consider adding a CDN for static assets
- Enable gzip compression on your server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

All rights reserved.
