# 🚀 Modern Data Scientist Resume

A stunning, modern, and responsive resume website built with Next.js, React, and Tailwind CSS. Perfect for showcasing your data science, AI/ML, and analytics expertise.

## ✨ Features

- **Modern Design**: Beautiful gradient backgrounds, glass morphism effects, and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scroll animations, hover effects, and motion graphics
- **SEO Optimized**: Built with Next.js for excellent SEO performance
- **Print Ready**: Optimized for PDF generation and printing
- **Dark Mode Ready**: Built-in dark mode support
- **Performance**: Fast loading with optimized images and code splitting

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with React 18
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion for smooth interactions
- **UI Components**: Custom component library with Material-UI integration
- **Icons**: Lucide React for beautiful icons
- **Typography**: Inter font family for modern readability

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd data-scientist-resume
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add your profile picture**
   - Place your `profile.png` image in the `public/` folder
   - The image should be at least 320x320 pixels for optimal display
   - Supported formats: PNG, JPG, JPEG

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main resume page
├── components/
│   └── ui/                  # Reusable UI components
│       ├── button.tsx       # Button component with variants
│       └── card.tsx         # Card component with glass effects
├── lib/
│   └── utils.ts             # Utility functions
├── tailwind.config.js       # Tailwind CSS configuration
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## 🎨 Customization

### Personal Information
Edit the `person` object in `app/page.tsx` to update your details:

```typescript
const person = {
  name: "Your Name",
  title: "Your Title",
  location: "Your Location",
  phone: "Your Phone",
  email: "your.email@example.com",
  linkedin: "Your LinkedIn URL",
  // ... other details
};
```

### Skills & Experience
Update the skills, experience, and projects arrays to reflect your background:

```typescript
const skills = {
  "Programming": ["Python", "R", "SQL"],
  "ML / AI": ["Deep Learning", "NLP", "Computer Vision"],
  // ... add more categories
};
```

### Styling
Customize colors and animations in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color',
        // ... other shades
      }
    }
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Static Export
1. Add `"export": "next export"` to package.json scripts
2. Run `npm run export`
3. Deploy the `out` folder to any static hosting service

## 📱 Responsive Design

The resume is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎯 SEO Features

- Semantic HTML structure
- Meta tags and Open Graph
- Structured data (JSON-LD)
- Optimized for search engines
- Fast loading times

## 🖨️ Print Optimization

The resume is optimized for printing with:
- Clean, professional layout
- Proper page breaks
- Optimized typography
- Hidden navigation elements

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Sections

1. Create a new section component
2. Add it to the main page
3. Update navigation if needed
4. Style with Tailwind classes

## 🌟 Features in Detail

### Glass Morphism
Modern glass-like effects using backdrop blur and transparency:

```css
.glass-effect {
  @apply backdrop-blur-md bg-white/70 border border-white/20;
}
```

### Smooth Animations
Framer Motion animations for engaging user experience:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

### Gradient Text
Beautiful gradient text effects:

```css
.gradient-text {
  @apply bg-gradient-to-r from-primary-600 via-accent-600 to-success-600 bg-clip-text text-transparent;
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) for beautiful icons

---

**Built with ❤️ for the Data Science community**

Transform your resume into a stunning digital experience that showcases your expertise in AI, ML, and data science!
