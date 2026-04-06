# Jaseem T K — Portfolio

A modern, animated personal portfolio built with **Next.js 16**, **React 19**, **Tailwind CSS 4**, and **Framer Motion**. Showcases featured projects, services, resume, and contact information with premium design and smooth micro-animations.

🔗 **Live:** [jaseem.work](https://jaseem.work)

---

## ✨ Features

- **Cinematic Hero Section** — Full-screen hero with layered gradient overlays, animated heading text, and a rotating SVG spinner
- **Smooth Scroll Navigation** — Sticky navbar with smooth-scroll to each section; responsive mobile slide-in menu
- **About & Stats** — Animated stat cards (experience, projects, clients, revenue) with hover micro-interactions
- **Featured Work** — Project showcase with images, tech tags, and external links
- **Services** — Highlights of offered services with animated cards
- **Resume Download** — Dedicated section with skill highlights and a one-click PDF download
- **Contact Form** — Direct contact section with email integration
- **Footer** — Newsletter signup, page/project links, and social icons (GitHub, LinkedIn, Instagram, Dribbble, X)
- **SEO** — JSON-LD structured data, meta tags, sitemap, and semantic HTML
- **MongoDB Reviews** — API-backed testimonial system with star ratings and optional image upload

---

## 🛠 Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | Next.js 16 (App Router)             |
| UI          | React 19, TypeScript                |
| Styling     | Tailwind CSS 4, PostCSS             |
| Animations  | Framer Motion, GSAP                 |
| Icons       | Lucide React, React Icons           |
| Database    | MongoDB (Node.js Driver)            |
| Fonts       | Inter, Oswald (Google Fonts)        |
| Deployment  | Vercel                              |

---

## 📁 Project Structure

```text
app/
  api/
    reviews/
      route.ts            # Reviews API — GET & POST
  globals.css             # Global styles, fonts, animations
  layout.tsx              # Root layout with SEO metadata & Footer
  page.tsx                # Main single-page portfolio
components/
  FeaturedWork.tsx         # Project showcase section
  Footer.tsx              # Site footer with socials & newsletter
  HeroContent.tsx         # Hero section content
  IntroAnimation.tsx      # GSAP-powered intro animation
  ResumeDownload.tsx      # Resume section with PDF download
  Services.tsx            # Services showcase
  Testimonial.tsx         # Reviews carousel & submission modal
  about.tsx               # About content
  contact.tsx             # Contact form
lib/
  mongodb.ts              # MongoDB connection helper
public/
  resume.pdf              # Downloadable resume
  sitemap.xml             # SEO sitemap
  ...                     # Project images & static assets
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** (or pnpm)
- A **MongoDB** connection string (Atlas or local)

### 1. Clone the repository

```bash
git clone https://github.com/mhdjaseemtk/portfolio-nextjs.git
cd portfolio-nextjs
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env.local
```

> On Windows PowerShell, create `.env.local` manually and copy values from `.env.example`.

Required variables:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
MONGODB_DB=portfolio
```

### 4. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 📜 Available Scripts

| Command          | Description                    |
|------------------|--------------------------------|
| `npm run dev`    | Start development server       |
| `npm run build`  | Create production build         |
| `npm run start`  | Run production server           |
| `npm run lint`   | Run ESLint                      |

---

## 🗄 MongoDB Reviews

### How It Works

1. **Frontend** (`components/Testimonial.tsx`) — Loads reviews from `/api/reviews`, displays a carousel, and opens a modal for new submissions with image preview.
2. **API** (`app/api/reviews/route.ts`) — `GET` returns reviews sorted newest-first; `POST` validates and inserts a new review.
3. **Connection** (`lib/mongodb.ts`) — Reuses a cached MongoDB client; reads `MONGODB_URI` from env.

### Review Document Shape

```ts
{
  author: string;
  role: string;
  text: string;
  avatar: string | null;
  rating: number;
  createdAt: Date;
}
```

---

## 🌐 Deployment

Deploy to **Vercel** (recommended) or any Node.js host.

Make sure these environment variables are set in the deployment dashboard:

- `MONGODB_URI`
- `MONGODB_DB`

---

## 🔗 Links

- **Website:** [jaseem.work](https://jaseem.work)
- **GitHub:** [mhdjaseemtk](https://github.com/mhdjaseemtk)
- **LinkedIn:** [jaseemtk](https://www.linkedin.com/in/jaseemtk/)
- **Instagram:** [mhdjaseemtk](https://www.instagram.com/mhdjaseemtk/)
- **Email:** mhdjaseemtk@gmail.com

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Node.js Driver Docs](https://www.mongodb.com/docs/drivers/node/)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://gsap.com/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

## 📝 License

© 2026 Jaseem T K. All rights reserved.
