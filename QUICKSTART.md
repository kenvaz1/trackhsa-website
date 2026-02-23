# Quick Start Guide

Get your marketing website up and running in 3 minutes!

## Step 1: Install Dependencies

```bash
cd website
npm install
```

This will install all required packages (React, Vite, TailwindCSS, Lucide icons).

## Step 2: Start Development Server

```bash
npm run dev
```

Your website will open at `http://localhost:5173`

## Step 3: Customize Your Content

### Update App Store Link

Open `src/App.jsx` and find line ~234 and ~425:

```jsx
href="https://apps.apple.com/app/your-app-id"
```

Replace with your actual App Store URL.

### Customize Colors (Optional)

Edit `tailwind.config.js` to change the primary color scheme.

### Update Content (Optional)

In `src/App.jsx`, you can modify:
- **Features** (line ~32): Update feature descriptions
- **Categories** (line ~60): Add/remove categories
- **Testimonials** (line ~78): Add real user reviews
- **FAQs** (line ~96): Update questions and answers

## Step 4: Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## Step 5: Deploy

### Easiest Option - Vercel (Free)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your repository
5. Click "Deploy" (Vercel auto-detects Vite)
6. Your site is live! 🎉

### Alternative - Netlify (Free)

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"
7. Your site is live! 🎉

## Common Customizations

### Add Your Logo

1. Add your logo image to `public/` folder
2. In `src/App.jsx`, replace the Receipt icon:

```jsx
<img src="/your-logo.png" alt="Logo" className="w-8 h-8" />
```

### Add Google Analytics

In `index.html`, add before closing `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Change Website Title

In `index.html`, update:

```html
<title>Your App Name - AI-Powered Receipt Management</title>
```

## Need Help?

- Check `README.md` for detailed documentation
- All content is in `src/App.jsx` - easy to find and edit
- The site is fully responsive - test on mobile!

## What's Included

✅ Hero section with download CTA  
✅ 6 feature cards with icons  
✅ Category showcase  
✅ How it works (3 steps)  
✅ User testimonials  
✅ FAQ accordion  
✅ Download section  
✅ Responsive navigation  
✅ Mobile-friendly design  
✅ Smooth animations  
✅ SEO-optimized  

Enjoy your new marketing website! 🚀
