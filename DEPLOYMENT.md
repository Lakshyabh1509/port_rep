# 🚀 Deployment Instructions for Lakshya Portfolio

This guide covers deploying your portfolio to **Vercel**, **Netlify**, and **Cloudflare Pages** (original).

---

## 📋 Prerequisites

Before deploying, ensure you have:
- Node.js v19.9.0 or higher installed
- Git installed and repository initialized
- Your code pushed to GitHub/GitLab/Bitbucket

---

## 🔷 Option 1: Vercel (Recommended - Easiest)

### Method A: Deploy via Vercel Dashboard (No CLI required)

1. **Go to [vercel.com](https://vercel.com)** and sign up/login with GitHub

2. **Click "Add New Project"**

3. **Import your GitHub repository**
   - Select `Lakshyabh1509/port_rep` (or your repo name)

4. **Configure Build Settings:**
   - Framework Preset: `Other`
   - Build Command: `npm run build`
   - Output Directory: `build/client`
   - Install Command: `npm install`

5. **Add Environment Variables (Optional):**
   - `SESSION_SECRET`: A random string for session encryption (e.g., generate with `openssl rand -base64 32`)

6. **Click "Deploy"** and wait for the build to complete!

### Method B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (first time - will prompt for settings)
vercel

# Deploy to production
vercel --prod

# Or use the npm script
npm run deploy:vercel
```

### Vercel Environment Variables

Set these in your Vercel project settings (Settings → Environment Variables):

| Variable | Description | Required |
|----------|-------------|----------|
| `SESSION_SECRET` | Secret for session cookies | Optional |

---

## 🔶 Option 2: Netlify

### Method A: Deploy via Netlify Dashboard

1. **Go to [netlify.com](https://netlify.com)** and sign up/login with GitHub

2. **Click "Add new site" → "Import an existing project"**

3. **Connect to your Git provider** and select your repository

4. **Configure Build Settings:**
   - Build Command: `npm run build`
   - Publish Directory: `build/client`

5. **Click "Deploy site"**

### Method B: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize (link to existing site or create new)
netlify init

# Build the project
npm run build

# Deploy preview
netlify deploy --dir=build/client

# Deploy to production
netlify deploy --prod --dir=build/client

# Or use the npm script
npm run deploy:netlify
```

### Netlify Environment Variables

Set these in your Netlify site settings (Site settings → Environment variables):

| Variable | Description | Required |
|----------|-------------|----------|
| `SESSION_SECRET` | Secret for session cookies | Optional |
| `NODE_VERSION` | `20` (already set in netlify.toml) | Auto-configured |

---

## ☁️ Option 3: Cloudflare Pages (Original Setup)

This project was originally configured for Cloudflare Pages.

### Deploy via Wrangler CLI

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build and deploy
npm run deploy
```

### Deploy via Cloudflare Dashboard

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages**
3. Click **Create a project** → **Connect to Git**
4. Select your repository
5. Configure:
   - Build Command: `npm run build`
   - Build output directory: `build/client`
6. Deploy!

---

## 🔧 Build Commands Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (localhost:7777) |
| `npm run build` | Build for production |
| `npm run preview` | Build and preview locally |
| `npm run deploy` | Deploy to Cloudflare Pages |
| `npm run deploy:vercel` | Deploy to Vercel |
| `npm run deploy:netlify` | Deploy to Netlify |

---

## 🌍 Custom Domain Setup

### Vercel
1. Go to your project → Settings → Domains
2. Add your domain (e.g., `lakshyabhambhani.dev`)
3. Update DNS records as instructed

### Netlify
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow DNS configuration instructions

### Cloudflare Pages
1. Go to Pages → Your project → Custom domains
2. Add your domain
3. DNS is auto-configured if domain is on Cloudflare

---

## 🔐 Environment Variables Summary

For all platforms, you may want to set:

```
SESSION_SECRET=your-super-secret-random-string-here
```

Generate a secure secret:
```bash
# Using OpenSSL
openssl rand -base64 32

# Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

---

## ❓ Troubleshooting

### Build Fails with Node Version Error
- Ensure Node.js >= 19.9.0
- On Vercel: Settings → General → Node.js Version → 20.x
- On Netlify: Set `NODE_VERSION=20` in environment variables

### Assets Not Loading
- Check that build output is `build/client`
- Verify static files are in `public/` folder

### 3D Models Not Rendering
- Ensure `.glb` and `.hdr` files are included in the build
- Check browser console for CORS errors

### Contact Form Not Working
- Verify EmailJS configuration in the code
- Check that API keys are set correctly

---

## 📞 Support

- **GitHub Issues**: [github.com/Lakshyabh1509/portfolio/issues](https://github.com/Lakshyabh1509/portfolio/issues)
- **Documentation**: Check the README.md for more details

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Environment variables configured
- [ ] Build successful locally (`npm run build`)
- [ ] Domain configured (optional)
- [ ] SSL/HTTPS enabled (automatic on all platforms)
- [ ] Test all pages after deployment
- [ ] Verify contact form works
- [ ] Check 3D elements load correctly

---

**Happy Deploying! 🎉**
