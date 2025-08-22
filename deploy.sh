#!/bin/bash

echo "🚀 Deploying Resume to GitHub Pages..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not found. Please initialize git first."
    exit 1
fi

# Check if we're on main branch
current_branch=$(git branch --show-current)
if [ "$current_branch" != "main" ]; then
    echo "⚠️  You're not on the main branch. Current branch: $current_branch"
    read -p "Do you want to continue? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

echo "✅ Build successful!"

# Add all changes
echo "📝 Adding changes to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Update resume website - $(date)"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ Deployment initiated successfully!"
    echo "🌐 Your website will be available at: https://YOUR_USERNAME.github.io/resume/"
    echo "⏳ Please wait a few minutes for GitHub Actions to complete the deployment."
else
    echo "❌ Push failed. Please check your git configuration and try again."
    exit 1
fi
