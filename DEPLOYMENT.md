# Portfolio Website Deployment Guide

## 🔐 Secure Deployment with Hidden API Keys

This guide explains how to deploy your portfolio website to GitHub Pages while keeping your API keys secure.

### 🚀 Quick Start

1. **Setup Environment Variables**
   ```bash
   cp .env.example .env
   # Edit .env and add your actual API keys
   ```

2. **Deploy**
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```

### 🔒 Security Features

- ✅ `.env` file is automatically ignored by git
- ✅ API keys are never committed to the repository
- ✅ GitHub Actions uses secure environment variables
- ✅ Automated deployment with proper security

### 🛠️ Manual Setup

#### 1. Environment Variables
Create a `.env` file in the root directory:
```env
VITE_TOGETHER_API_KEY=your_actual_api_key_here
```

#### 2. GitHub Repository Secrets
For automatic deployment via GitHub Actions:

1. Go to your GitHub repository
2. Navigate to **Settings** > **Secrets and variables** > **Actions**
3. Click **New repository secret**
4. Add the following secrets:
   - Name: `VITE_TOGETHER_API_KEY`
   - Value: Your Together AI API key

#### 3. Enable GitHub Pages
1. Go to **Settings** > **Pages**
2. Source: **Deploy from a branch**
3. Branch: **gh-pages**
4. Folder: **/ (root)**

### 🔄 Deployment Methods

#### Method 1: Automatic (Recommended)
Push to main branch - GitHub Actions handles the rest:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

#### Method 2: Manual
Run the deployment script:
```bash
./deploy.sh
```

#### Method 3: Direct npm
```bash
npm run build
npm run deploy
```

### 📁 File Structure
```
portfolio/
├── .env                    # Your API keys (never committed)
├── .env.example           # Template for API keys
├── .github/workflows/     # GitHub Actions for deployment
│   └── deploy.yml
├── deploy.sh              # Deployment script
├── src/
│   └── components/
│       └── ui/
│           └── PersonalChatbot.jsx
└── ...
```

### 🌐 Live Site
After deployment, your portfolio will be available at:
`https://yourusername.github.io/portfolio`

### 🔧 Troubleshooting

**API Key Issues:**
- Ensure your `.env` file has the correct API key
- Check that the GitHub secret name matches exactly: `VITE_TOGETHER_API_KEY`
- Verify the API key is valid at [Together AI](https://api.together.xyz/)

**Deployment Issues:**
- Check GitHub Actions tab for build logs
- Ensure GitHub Pages is enabled in repository settings
- Wait 5-10 minutes for changes to propagate

**Chatbot Not Working:**
- Check browser console for API errors
- Verify the API key is properly loaded
- Test the API key directly on Together AI platform

### 🔐 Security Best Practices

1. **Never commit API keys** - Always use environment variables
2. **Use GitHub Secrets** for automatic deployments
3. **Regularly rotate API keys** for security
4. **Monitor API usage** to detect unauthorized access
5. **Use HTTPS** for all deployments (GitHub Pages provides this)

### 📞 Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Verify your API key is correct
3. Ensure all secrets are properly set
4. Test locally first with `npm run dev`

---

**🎉 Your portfolio is now deployed securely with hidden API keys!**
3. In the "Source" section, select "Deploy from a branch"
4. In the "Branch" section, select "gh-pages" and "/(root)"
5. Click "Save"

## 7. Access Your Portfolio

After a few minutes, your portfolio will be available at:
https://parthrastogicoder.github.io/portfolio/

## Updating Your Portfolio

Whenever you make changes to your portfolio and want to update the deployed version:

1. Commit your changes
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```

2. Deploy the updated version
   ```bash
   npm run deploy
   ```

## Troubleshooting

### 404 Error

If you get a 404 error when accessing your site:
- Check that your repository is named "portfolio"
- Verify that the `homepage` in package.json is correctly set to "https://parthrastogicoder.github.io/portfolio"
- Confirm that the `base` in vite.config.js is set to "/portfolio/"
- Make sure GitHub Pages is set to deploy from the gh-pages branch

### Assets Not Loading

If images or other assets aren't loading:
- Check that all image paths in your code use the correct base path (e.g., `/portfolio/images/profile.jpg`)
- Verify that the images exist in the correct location in your project
