# 🚀 Deployment Instructions for Lakshya Portfolio

This guide covers deploying your portfolio to **Netlify** (recommended), **Cloudflare Pages**, and **Vercel**.

---

## 📋 Prerequisites

Before deploying, ensure you have:
- Node.js v20.0.0 or higher installed
- Git installed and repository initialized
- Your code pushed to GitHub/GitLab/Bitbucket

---

## 🔶 Option 1: Netlify (Recommended - Best for this project)

> **Why Netlify?** This project is fully configured for Netlify with the `@netlify/remix-adapter` for server-side rendering. It handles heavy 3D assets better than Vercel's serverless functions.

### Method A: Deploy via Netlify Dashboard (Easiest)

1. **Go to [netlify.com](https://netlify.com)** and sign up/login with GitHub

2. **Click "Add new site" → "Import an existing project"**

3. **Connect to GitHub** and select `Lakshyabh1509/port_rep`

4. **Build settings will be auto-detected** from `netlify.toml`:
   - Build Command: `npm run build:netlify`
   - Publish Directory: `.netlify`

5. **Add Environment Variables (Optional):**
   - `SESSION_SECRET`: A random string for session encryption

6. **Click "Deploy site"** and wait for the build to complete!

### Method B: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize (link to existing site or create new)
netlify init

# Deploy to production
netlify deploy --prod
```

### Netlify Environment Variables

Set these in your Netlify site settings (Site settings → Environment variables):

| Variable | Description | Required |
|----------|-------------|----------|
| `SESSION_SECRET` | Secret for session cookies | Optional |
| `NODE_VERSION` | `20` (already set in netlify.toml) | Auto-configured |

---

## ☁️ Option 2: Cloudflare Pages (Most Performant)

### Deploy via Cloudflare Dashboard

1. **Go to [pages.cloudflare.com](https://pages.cloudflare.com)** and sign up/login

2. **Create a new project** and connect your GitHub repository

3. **Configure Build Settings:**
   - Framework Preset: None (or Remix if available)
   - Build Command: `npm run build:cloudflare`
   - Build Output Directory: `build/client`

4. **Deploy!**

---

## 🔷 Option 3: Vercel (May have issues)

> ⚠️ **Note**: Vercel may experience `FUNCTION_INVOCATION_FAILED` errors due to serverless function limits with this project's heavy 3D assets. Netlify is recommended instead.

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
| `npm run build` | Build for production (Cloudflare) |
| `npm run build:vercel` | Build for Vercel deployment |
| `npm run preview` | Build and preview locally |
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
