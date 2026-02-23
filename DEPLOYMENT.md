# Deployment Guide

## Before You Deploy

### 1. Update App Store Link

In `src/App.jsx`, search for `apps.apple.com/app/your-app-id` and replace with your actual App Store URL.

You'll find it in two places:
- Line ~234 (Hero section)
- Line ~425 (Download section)

### 2. Add Your Domain (Optional)

If you have a custom domain, you'll configure it in your hosting platform after deployment.

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**
- Free hosting
- Automatic HTTPS
- Global CDN
- Zero configuration
- Automatic deployments from Git

**Steps:**

1. **Push to GitHub** (if not already)
   ```bash
   cd /Users/kennethvaz/Documents/Kvaz_Receipts_Application
   git add website/
   git commit -m "Add marketing website"
   git push
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"
   - Done! Your site is live in ~30 seconds

3. **Custom Domain** (Optional)
   - In Vercel dashboard, go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain
   - Update DNS records as instructed

**Your site will be at:** `https://your-project-name.vercel.app`

---

### Option 2: Netlify

**Why Netlify?**
- Free hosting
- Easy drag-and-drop deployment
- Form handling (if you add contact forms later)
- Automatic HTTPS

**Steps:**

1. **Build your site locally**
   ```bash
   cd website
   npm run build
   ```

2. **Deploy to Netlify**
   
   **Method A - Drag & Drop:**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag the `dist` folder onto the page
   - Done! Instant deployment
   
   **Method B - Git Integration:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
     - Base directory: `website`
   - Click "Deploy site"

**Your site will be at:** `https://random-name-123.netlify.app`

---

### Option 3: GitHub Pages (Free)

**Steps:**

1. **Install gh-pages**
   ```bash
   cd website
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   
   Add to `scripts`:
   ```json
   "deploy": "vite build && gh-pages -d dist"
   ```
   
   Add at root level:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name"
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to your repo on GitHub
   - Settings → Pages
   - Source: Deploy from branch `gh-pages`
   - Save

**Your site will be at:** `https://yourusername.github.io/your-repo-name`

---

### Option 4: AWS S3 + CloudFront (Advanced)

For production apps with high traffic:

1. **Build**
   ```bash
   npm run build
   ```

2. **Create S3 Bucket**
   - Enable static website hosting
   - Upload `dist` folder contents

3. **Setup CloudFront**
   - Create distribution pointing to S3 bucket
   - Configure custom domain
   - Enable HTTPS

---

## Post-Deployment Checklist

### Essential

- [ ] Test website on mobile devices
- [ ] Verify App Store link works correctly
- [ ] Check all sections load properly
- [ ] Test navigation menu (desktop & mobile)
- [ ] Verify FAQ accordion works

### SEO & Analytics

- [ ] Add Google Analytics tracking code
- [ ] Submit sitemap to Google Search Console
- [ ] Add Open Graph meta tags for social sharing
- [ ] Verify page title and description

### Performance

- [ ] Run Lighthouse audit (aim for 90+ score)
- [ ] Test page load speed
- [ ] Verify images are optimized
- [ ] Check mobile performance

### Marketing

- [ ] Share link on social media
- [ ] Add website URL to App Store listing
- [ ] Include in email signatures
- [ ] Add to business cards

---

## Custom Domain Setup

### For Vercel:

1. Buy domain from Namecheap, GoDaddy, etc.
2. In Vercel: Settings → Domains → Add domain
3. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### For Netlify:

1. In Netlify: Domain settings → Add custom domain
2. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

---

## Updating Your Site

### With Vercel/Netlify (Git Integration):

```bash
# Make changes to src/App.jsx
git add .
git commit -m "Update content"
git push
```

Your site automatically redeploys! 🎉

### Manual Deployment:

```bash
npm run build
# Upload dist folder to your hosting
```

---

## Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Site Shows Blank Page

- Check browser console for errors
- Verify all files in `dist` folder uploaded
- Check base URL configuration

### Styles Not Loading

- Clear browser cache
- Check if CSS files are in `dist/assets`
- Verify hosting serves static files correctly

---

## Cost Breakdown

| Platform | Free Tier | Custom Domain | HTTPS |
|----------|-----------|---------------|-------|
| Vercel | ✅ Unlimited | $20/year | ✅ Free |
| Netlify | ✅ 100GB/month | $20/year | ✅ Free |
| GitHub Pages | ✅ 1GB storage | $12/year | ✅ Free |

**Recommendation:** Start with Vercel free tier. Upgrade only if you exceed limits (unlikely for a marketing site).

---

## Need Help?

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Netlify Docs: [docs.netlify.com](https://docs.netlify.com)
- Vite Docs: [vitejs.dev](https://vitejs.dev)

Your marketing website is ready to launch! 🚀
