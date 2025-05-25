# GitHub Pages Deployment Guide

Follow these steps to deploy your portfolio to GitHub Pages:

## 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click on the "+" icon in the top right corner and select "New repository"
3. Name the repository "portfolio" (must match the name in package.json's homepage URL)
4. Make the repository public
5. Click "Create repository"

## 2. Initialize Git Repository Locally (if not already done)

```bash
cd /home/parth/Desktop/Portfolio
git init
git add .
git commit -m "Initial commit"
```

## 3. Connect to Remote Repository

Replace `USERNAME` with your GitHub username:

```bash
git remote add origin https://github.com/parthrastogicoder/portfolio.git
```

## 4. Push Code to GitHub

```bash
git branch -M main
git push -u origin main
```

## 5. Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build your project (`npm run build`)
2. Push the build files to the `gh-pages` branch on GitHub

## 6. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" > "Pages"
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
