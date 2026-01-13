# GitHub Pages Deployment Guide for Shaphargroup Website

This guide explains how to deploy the Shaphargroup website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your local machine
- Node.js 18+ installed

## Step 1: Build the Static Website

Run the following command to build the static files:

```bash
npm run build
```

This creates the static files in the `dist/public` directory.

## Step 2: Prepare for GitHub Pages

After building, ensure these files exist in `dist/public`:
- `index.html` - Main entry point
- `404.html` - Handles client-side routing (copied from public folder)
- `.nojekyll` - Prevents Jekyll processing (copied from public folder)

If they don't exist, copy them manually:
```bash
cp dist/public/index.html dist/public/404.html
touch dist/public/.nojekyll
```

## Step 3: Create a GitHub Repository

1. Create a new repository on GitHub
2. Name it `shaphargroup.github.io` for a user/organization site, or any name for a project site

## Step 4: Deploy to GitHub Pages

### Option A: Deploy from `dist/public` folder (Recommended)

1. Initialize git in the `dist/public` folder:
```bash
cd dist/public
git init
git add .
git commit -m "Deploy Shaphargroup website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

2. Go to your repository Settings > Pages
3. Set Source to "Deploy from a branch" and select `main` branch
4. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Option B: Use GitHub Actions (Automated)

1. Push your entire project to GitHub
2. Create `.github/workflows/deploy.yml` with this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Copy 404.html for SPA routing
        run: cp dist/public/index.html dist/public/404.html
      
      - name: Create .nojekyll
        run: touch dist/public/.nojekyll
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/public
```

3. Go to Settings > Pages and set Source to "GitHub Actions"

## Custom Domain (Optional)

1. Add a `CNAME` file in `dist/public` with your domain:
```
shaphargroup.com
```

2. Configure DNS records at your domain registrar:
   - For apex domain: Add A records pointing to GitHub's IPs
   - For subdomain: Add CNAME record pointing to `YOUR_USERNAME.github.io`

## Important Notes

- The website uses client-side routing with Wouter
- The 404.html file redirects all routes to index.html for SPA support
- The .nojekyll file ensures CSS and JS files work correctly
- All assets are bundled - no external dependencies needed

## Troubleshooting

**Blank page or 404 errors:**
- Ensure 404.html exists in the deployed folder
- Check that .nojekyll file exists

**Styles not loading:**
- Ensure .nojekyll file is present
- Clear browser cache

**Routes not working:**
- Verify the redirect script in index.html
- Check browser console for errors
