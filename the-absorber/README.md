# The Absorber - Premium Automotive Care

A highly mobile-optimized React application showcasing "The Absorber" - a revolutionary PVA automotive drying towel designed for luxury car enthusiasts.

## 🚀 Features

- **Dynamic Navigation**: Responsive navbar that adapts width based on scroll direction
- **Mobile-First Design**: Fully optimized for mobile devices with touch-friendly interactions
- **Premium UI**: Luxury aesthetic with sophisticated animations and effects
- **Performance Optimized**: Built with Next.js 15 and optimized for Vercel deployment
- **Component Architecture**: Reusable components for easy site-wide changes

## 🛠 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Inter, Cormorant Garamond, Montserrat)
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📱 Mobile Optimization

- Touch-friendly minimum target sizes (44px)
- Responsive typography and layouts
- Smooth mobile menu animations
- Optimized image loading
- Performance-focused CSS
- Accessibility features

## 🎨 Design Features

### Dynamic Navbar
- **Scroll Down**: Navbar contracts with wider margins (professional look)
- **Scroll Up**: Navbar expands with narrower margins (welcoming look)
- **Glassy Effect**: Semi-transparent with backdrop blur
- **Mobile Menu**: Full-screen overlay with staggered animations

### Visual Elements
- **Hero Section**: Uses hero.png as background
- **Content Sections**: Uses second.png as background for all other sections
- **Gradient Overlays**: Sophisticated lighting effects
- **Smooth Animations**: Fade-in-up effects with proper timing

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Start production server**:
   ```bash
   npm start
   ```

## 📦 Deployment

### Vercel (Recommended)

1. **Connect Repository**:
   - Import your repository to Vercel
   - Framework preset will be automatically detected as Next.js

2. **Environment Variables** (if needed):
   - No environment variables required for basic deployment

3. **Deploy**:
   - Push to main branch for automatic deployment
   - Or use `vercel --prod` for manual deployment

### Build Configuration

The project includes optimized build settings:
- Static site generation where possible
- Image optimization
- Code splitting
- Performance optimization

## 🎯 Target Audience

- **Luxury Car Owners**: Porsche, Mercedes, BMW enthusiasts
- **Car Detailers**: Professional automotive care specialists
- **Quality Enthusiasts**: Those who appreciate premium products

## 🔧 Component Structure

```
src/
├── components/
│   ├── ui/
│   │   └── Button.tsx          # Reusable button component
│   ├── navigation/
│   │   └── Navbar.tsx          # Dynamic navigation component
│   └── sections/
│       ├── HeroSection.tsx     # Hero section with hero.png
│       └── ContentSection.tsx  # Reusable content sections
├── app/
│   ├── layout.tsx              # Root layout with fonts
│   ├── page.tsx                # Main page
│   ├── globals.css             # Global styles
│   └── viewport.ts             # Viewport configuration
└── lib/
    └── utils.ts                # Utility functions
```

## 📝 Customization

### Button Component
All buttons use the centralized `Button` component for easy site-wide changes:
- Located in `src/components/ui/Button.tsx`
- Variants: primary, secondary, outline, ghost
- Sizes: sm, md, lg
- Supports both button and anchor (link) modes

### Styling
- Primary colors: Orange (#FF6B35) and gradients
- Typography: Inter (body), Cormorant Garamond (headings), Montserrat (UI)
- Responsive breakpoints: mobile-first approach

## 🔍 SEO Optimization

- Meta tags optimized for search engines
- Open Graph tags for social sharing
- Twitter Card support
- Structured data ready
- Mobile-friendly design

## ⚡ Performance

- Optimized images with Next.js Image component
- Font optimization with Google Fonts
- Code splitting and lazy loading
- Minimal JavaScript bundle
- CSS optimization with Tailwind CSS

## 🎨 Brand Guidelines

The design follows luxury automotive branding:
- **Elite Feel**: Premium materials and finishes
- **Professional**: Clean, modern interface
- **Engaging**: Interactive elements that respond to user behavior
- **Trustworthy**: Consistent, high-quality experience

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## 🤝 Contributing

To make changes:
1. Modify the appropriate component
2. Test responsiveness across devices
3. Ensure accessibility standards
4. Test build process before deployment

## 📄 License

This project is proprietary and confidential.