# Chase Tipton Photography

A modern, responsive portfolio website for professional photographer Chase Tipton, built with Next.js 16 and featuring a stunning visual experience with dynamic carousels, animated marquees, and an integrated contact form.

🌐 **Live Site**: [chasetakephoto.com](https://www.chasetakephoto.com)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Components](#components)
- [SEO & Performance](#seo--performance)
- [Deployment](#deployment)

## ✨ Features

- **Dynamic Image Carousel** - Showcase photography portfolio with smooth transitions
- **Animated Marquees** - Eye-catching scrolling text and logo displays
- **Contact Form Integration** - Formspree-powered contact form with validation
- **Responsive Design** - Mobile-first approach using Tailwind CSS 4
- **SEO Optimized** - Structured data, XML sitemap, and Google Search Console integration
- **Custom Scroll Animations** - Fade-in effects on scroll for enhanced UX
- **Modern UI Components** - Material-UI integration for polished interfaces

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **React**: 19.2.1
- **Styling**: 
  - [Tailwind CSS 4](https://tailwindcss.com/)
  - [Material-UI](https://mui.com/)
  - [Emotion](https://emotion.sh/) for styled components
- **Forms**: [Formspree React](https://formspree.io/)
- **Linting**: ESLint with Next.js config
- **Code Formatting**: Prettier

## 📁 Project Structure

```
my-nextjs-app/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.js            # Root layout with metadata
│   ├── page.js              # Home page with structured data
│   └── sitemap.js           # XML sitemap generation
├── components/
│   ├── Carousel.js          # Image carousel component
│   ├── Contact.js           # Contact form with Formspree
│   ├── Footer.js            # Site footer
│   ├── Hero.js              # Hero/about section
│   ├── LogosMarquee.js      # Logo marquee animation
│   ├── Marquee.js           # Text marquee animation
│   └── Nav.js               # Navigation bar
├── hooks/
│   └── useScrollFadeIn.js   # Custom hook for scroll animations
├── public/
│   └── googleb8673212cdb69fc1.html  # Google Search Console verification
└── [config files]
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-nextjs-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 💻 Development

### Available Scripts

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

### Environment Setup

The project uses Next.js App Router with React Server Components. Pages auto-update as you edit files.

### Making Changes

- **Pages**: Edit `app/page.js` for the main home page
- **Styles**: Modify `app/globals.css` or use Tailwind classes
- **Components**: Add/edit components in the `components/` directory
- **SEO**: Update structured data in `app/page.js` and metadata in `app/layout.js`

## 🧩 Components

### Core Components

- **Nav** - Responsive navigation bar
- **Carousel** - Image gallery with navigation controls
- **Marquee** - Scrolling text animation
- **LogosMarquee** - Client/brand logo display
- **Hero** - About/introduction section
- **Contact** - Formspree-integrated contact form
- **Footer** - Site footer with links

### Custom Hooks

- **useScrollFadeIn** - Provides fade-in animation on scroll for enhanced user experience

## 🔍 SEO & Performance

### Implemented Features

- ✅ XML Sitemap (`/sitemap.xml`)
- ✅ Structured Data (Schema.org Person markup)
- ✅ Google Search Console verification
- ✅ Semantic HTML structure
- ✅ Optimized metadata in layout
- ✅ Mobile-responsive design

### Structured Data

The site includes JSON-LD structured data for:
- Person schema (photographer profile)
- Contact information
- Social media links

## 🚢 Deployment

### Recommended: Vercel

The easiest way to deploy is using [Vercel](https://vercel.com/new):

1. Push your code to GitHub
2. Import the project on Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live with automatic deployments on push

### Other Platforms

This Next.js app can be deployed on:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any platform supporting Node.js

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📧 Contact

**Chase Tipton**  
Email: chasetakephoto@gmail.com  
Instagram: [@crdt24](https://www.instagram.com/crdt24)  
Website: [chasetakephoto.com](https://www.chasetakephoto.com)

## 📄 License

Private repository - All rights reserved.

---

Built with ❤️ using Next.js
