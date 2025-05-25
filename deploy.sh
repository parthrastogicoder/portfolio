#!/bin/bash

# Script to deploy the portfolio website to GitHub Pages

echo "🚀 Starting deployment process..."

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

# Commit any changes
echo "📝 Committing changes..."
git add .
git commit -m "Update portfolio: $(date +"%Y-%m-%d %H:%M")"

# Push to main branch
echo "⬆️ Pushing to main branch..."
git push -u origin main

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npm run deploy

echo "✨ Deployment completed! Your portfolio will be available at:"
echo "🌐 https://$(git remote get-url origin | sed 's/.*github.com[:/]\([^/]*\).*/\1/').github.io/portfolio"
echo "📝 Note: It might take a few minutes for the changes to be visible."
