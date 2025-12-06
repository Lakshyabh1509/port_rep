# 🚀 Deployment Instructions for Lakshya Portfolio

This guide covers deploying your portfolio to **Cloudflare Pages** (recommended), **Netlify**, and **Vercel**.

---

## 📋 Prerequisites

Before deploying, ensure you have:
- Node.js v20.0.0 or higher installed
- Git installed and repository initialized
- Your code pushed to GitHub/GitLab/Bitbucket

---

## ☁️ Option 1: Cloudflare Pages (Recommended - Best for this project)

> **Why Cloudflare Pages?** This project uses the Remix Cloudflare adapter which is fully tested and working. Cloudflare Pages offers:
> - **Unlimited free bandwidth** on the free tier
> - **Edge-based serving** for faster global performance
> - **No serverless function timeouts** like Vercel
> - **Full ESM support** without CommonJS compatibility issues

### Deploy via Cloudflare Dashboard (Easiest)

1. **Go to [pages.cloudflare.com](https://pages.cloudflare.com)** and sign up/login with GitHub

2. **Click "Create a project" → "Connect to Git"**

3. **Select your GitHub repository:** `Lakshyabh1509/port_rep`

4. **Configure Build Settings:**
   - **Framework preset:** Remix
   - **Build command:** `npm run build:cloudflare`
   - **Build output directory:** `build/client`
   - **Environment variables:** 
     - `NODE_VERSION` = `20`

5. **Click "Save and Deploy"** and wait for the build to complete (~3-5 minutes)

6. **Access your site** at `https://your-project.pages.dev`

### Deploy via Wrangler CLI

```bash
# Install Wrangler CLI globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build and deploy
npm run deploy
```

### Cloudflare Pages Environment Variables

Set these in your Cloudflare Pages project settings:

| Variable | Description | Required |
|----------|-------------|----------|
| `SESSION_SECRET` | Secret for session cookies | Optional |
| `NODE_VERSION` | `20` | Recommended |

---

## 🔶 Option 2: Netlify (Static Site Mode)

> ⚠️ **Note:** Netlify has compatibility issues with the current Remix version for SSR. Use static site mode instead.

### Deploy via Netlify Dashboard

1. **Go to [netlify.com](https://netlify.com)** and sign up/login with GitHub

2. **Click "Add new site" → "Import an existing project"**

3. **Connect to GitHub** and select `Lakshyabh1509/port_rep`

4. **Build settings will be auto-detected** from `netlify.toml`:
   - Build Command: `npm run build:cloudflare`
   - Publish Directory: `build/client`

5. **Click "Deploy site"** and wait for the build to complete!

### Netlify Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NODE_VERSION` | `20` (already set in netlify.toml) | Auto-configured |

---

## 🔷 Option 3: Vercel (May have issues)

> ⚠️ **Note**: Vercel may experience `FUNCTION_INVOCATION_FAILED` errors due to serverless function limits with heavy 3D assets. Cloudflare Pages is recommended instead.

### Deploy via Vercel Dashboard

1. **Go to [vercel.com](https://vercel.com)** and sign up/login with GitHub

2. **Click "Add New Project"**

3. **Import your GitHub repository**

4. **Configure Build Settings:**
   - Framework Preset: `Remix`
   - Build Command: `npm run build`
   - Install Command: `npm install`

5. **Add Environment Variables:**
   - `SESSION_SECRET`: A random string

6. **Click "Deploy"**

---

## 🔧 Build Commands Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (localhost:7777) |
| `npm run build:cloudflare` | Build for Cloudflare Pages |
| `npm run build` | Build for Vercel |
| `npm run preview` | Build and preview locally |
| `npm run deploy` | Deploy to Cloudflare Pages |

---

## 🌍 Custom Domain Setup

### Cloudflare Pages
1. Go to your project → Settings → Custom domains
2. Add your domain (e.g., `lakshyabhambhani.dev`)
3. Update DNS records as instructed

### Netlify
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow DNS configuration instructions

### Vercel
1. Go to your project → Settings → Domains
2. Add your domain
3. Update DNS records as instructed

---

## 🔐 Environment Variables Summary

For all platforms, you may want to set:

```
SESSION_SECRET=your-super-secret-random-string-here
NODE_VERSION=20
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
- Ensure Node.js >= 20.0.0
- Set `NODE_VERSION=20` in environment variables

### Assets Not Loading
- Check that build output is `build/client`
- Verify static files are in `public/` folder

### 3D Models Not Rendering
- Ensure `.glb` and `.hdr` files are included in the build
- Check browser console for CORS errors

### Contact Form Not Working
- Verify EmailJS configuration in the code
- Check that API keys are set correctly

### FUNCTION_INVOCATION_FAILED on Vercel
- This is due to serverless function limits
- **Solution:** Use Cloudflare Pages instead

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Environment variables configured
- [ ] Build successful locally (`npm run build:cloudflare`)
- [ ] Domain configured (optional)
- [ ] SSL/HTTPS enabled (automatic on all platforms)
- [ ] Test all pages after deployment
- [ ] Verify contact form works
- [ ] Check 3D elements load correctly

---

**Happy Deploying! 🎉**
