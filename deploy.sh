#!/bin/bash

# Script to deploy the portfolio website to GitHub Pages

echo "🚀 Starting deployment process..."

# Check if .env file exists
if [ ! -f .env ]; then
  echo "❌ Error: .env file not found!"
  echo "📝 Please create a .env file with your API keys."
  echo "📋 You can copy from .env.example and fill in your actual values."
  exit 1
fi

# Check if git is initialized
if [ ! -d .git ]; then
  echo "📦 Initializing git repository..."
  git init
  git add .
  git commit -m "Initial commit"
else
  echo "✅ Git repository already initialized"
fi

# Check if the remote origin exists
if ! git remote | grep -q "origin"; then
  echo "🔗 Please enter your GitHub username:"
  read username
  
  echo "🔗 Adding remote origin..."
  git remote add origin "https://github.com/$username/portfolio.git"
else
  echo "✅ Remote origin already exists"
fi

# Ensure .env is in .gitignore
if ! grep -q "^\.env$" .gitignore; then
  echo ".env" >> .gitignore
  echo "🔒 Added .env to .gitignore for security"
fi

# Commit any changes (excluding .env)
echo "📝 Committing changes..."
git add .
git commit -m "Update portfolio: $(date +"%Y-%m-%d %H:%M")"

# Push to main branch
echo "⬆️ Pushing to main branch..."
git push -u origin main

# Instructions for GitHub Pages with secrets
echo ""
echo "� IMPORTANT: Setting up GitHub Secrets for secure deployment"
echo "============================================================"
echo "1. Go to your GitHub repository: https://github.com/$(git remote get-url origin | sed 's/.*github.com[:/]\([^/]*\/[^/]*\).*/\1/' | sed 's/\.git$//')"
echo "2. Navigate to Settings > Secrets and variables > Actions"
echo "3. Click 'New repository secret'"
echo "4. Name: VITE_TOGETHER_API_KEY"
echo "5. Value: (paste your Together AI API key)"
echo "6. Click 'Add secret'"
echo ""
echo "🤖 The GitHub Actions workflow will automatically deploy your site"
echo "🌐 Your portfolio will be available at: https://$(git remote get-url origin | sed 's/.*github.com[:/]\([^/]*\).*/\1/').github.io/portfolio"
echo ""
echo "⚡ Alternative: Manual deployment with local API key"
echo "If you want to deploy manually right now:"
echo "1. Make sure your .env file has the correct API key"
echo "2. Run: npm run deploy"
echo ""

# Ask if user wants to deploy manually
read -p "🤔 Do you want to deploy manually now? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "🚀 Deploying manually..."
  npm run deploy
  echo "✨ Manual deployment completed!"
else
  echo "✅ Deployment will happen automatically via GitHub Actions when you push to main"
fi
