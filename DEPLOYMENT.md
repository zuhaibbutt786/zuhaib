# 🚀 Deploy Your Resume to GitHub Pages

This guide will help you host your resume website on GitHub Pages for free!

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Node.js and npm installed

## 🎯 Step-by-Step Deployment

### 1. Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Fill in:
   - **Repository name**: `resume` or `portfolio`
   - **Description**: `My professional resume built with Next.js and React`
   - **Visibility**: Public (required for free hosting)
   - **Initialize with**: README file
4. Click "Create repository"

### 2. Clone Repository to Your Computer

```bash
git clone https://github.com/YOUR_USERNAME/resume.git
cd resume
```

### 3. Copy Your Project Files

Copy all your project files into the cloned repository folder:
- `app/` folder
- `components/` folder
- `lib/` folder
- `public/` folder
- `package.json`
- `next.config.js`
- `tailwind.config.js`
- `tsconfig.json`
- `postcss.config.js`
- `.gitignore`

### 4. Install Dependencies

```bash
npm install
```

### 5. Test Build Locally

```bash
npm run build
```

### 6. Commit and Push to GitHub

```bash
git add .
git commit -m "Initial commit: Add resume website"
git push origin main
```

### 7. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Click **Configure** button

### 8. Automatic Deployment

The GitHub Actions workflow will automatically:
- Build your project
- Deploy to GitHub Pages
- Update on every push to main branch

## 🌐 Access Your Website

Your resume will be available at:
```
https://YOUR_USERNAME.github.io/resume/
```

## 🔄 Update Your Website

To update your website:

1. Make changes to your code
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update resume content"
   git push origin main
   ```
3. GitHub Actions will automatically rebuild and deploy

## 🛠️ Troubleshooting

### Build Errors
- Check that all dependencies are installed
- Ensure `profile.png` is in the `public/` folder
- Verify all import paths are correct

### Deployment Issues
- Check GitHub Actions tab for error logs
- Ensure repository is public
- Verify GitHub Pages is enabled

### Website Not Loading
- Wait a few minutes after deployment
- Check the Actions tab for deployment status
- Verify the URL is correct

## 📱 Custom Domain (Optional)

To use a custom domain:

1. Go to repository **Settings** → **Pages**
2. Add your custom domain
3. Update DNS settings with your domain provider
4. Add `CNAME` file in your repository root

## 🎨 Customization

- **Colors**: Edit `tailwind.config.js`
- **Content**: Update `app/page.tsx`
- **Styling**: Modify `app/globals.css`
- **Profile Picture**: Replace `public/profile.png`

## 📞 Support

If you encounter issues:
1. Check GitHub Actions logs
2. Verify all configuration files
3. Ensure all dependencies are correct
4. Check browser console for errors

---

**Happy Deploying! 🎉**

Your professional resume will be live on the web for free!
