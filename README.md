# Portfolio Next.js

A personal portfolio built with Next.js, React, Tailwind CSS, Framer Motion, and MongoDB for dynamic review storage.

## Overview

This project is a modern portfolio website with animated sections for:

- Hero and introduction
- Featured work and project showcase
- Services
- Contact
- Reviews / testimonials

The review section now supports MongoDB-backed data instead of hardcoded dummy entries. Visitors can submit a review with:

- Name
- Role or company
- Review text
- Star rating
- Optional profile image

The uploaded image is stored in MongoDB as part of the review document.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React
- MongoDB Node.js Driver

## Features

- Responsive portfolio layout
- Animated UI interactions with Framer Motion
- Featured projects section
- Review carousel with add-review modal
- MongoDB API route for fetching and creating reviews
- Optional image upload preview for testimonials

## Project Structure

```text
app/
  api/
    reviews/
      route.ts        # Reviews API: GET and POST
  layout.tsx
  page.tsx
components/
  FeaturedWork.tsx
  Services.tsx
  Testimonial.tsx     # Review UI and form
lib/
  mongodb.ts          # MongoDB connection helper
public/
  ...static assets
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a local environment file:

```bash
cp .env.example .env.local
```

If you are on Windows PowerShell and do not want to use `cp`, create `.env.local` manually and copy the values from `.env.example`.

Required variables:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
MONGODB_DB=portfolio
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

### `npm run dev`

Starts the local development server.

### `npm run build`

Creates a production build.

### `npm run start`

Runs the production server after building.

### `npm run lint`

Runs ESLint across the project.

Note: there are currently existing lint issues in some older files outside the MongoDB review work. Those should be cleaned up separately if you want a fully green lint run.

## MongoDB Review Flow

The review feature is implemented in two parts:

### Frontend

[components/Testimonial.tsx](/c:/Users/muhdj/OneDrive/Documents/portfolio-nextjs/components/Testimonial.tsx)

This component:

- Loads reviews from `/api/reviews`
- Displays them in the testimonial carousel
- Opens a modal to submit a new review
- Converts the selected image into a preview/data URL before submit

### Backend

[app/api/reviews/route.ts](/c:/Users/muhdj/OneDrive/Documents/portfolio-nextjs/app/api/reviews/route.ts)

This route:

- `GET` returns reviews from MongoDB sorted by newest first
- `POST` validates and inserts a new review document

[lib/mongodb.ts](/c:/Users/muhdj/OneDrive/Documents/portfolio-nextjs/lib/mongodb.ts)

This helper:

- Reuses the MongoDB client connection
- Reads `MONGODB_URI` from environment variables

## Review Document Shape

Each review stored in MongoDB contains fields like:

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

## Deployment Notes

When deploying to Vercel or another hosting provider, make sure these environment variables are set in the deployment dashboard:

- `MONGODB_URI`
- `MONGODB_DB`

Without them, the reviews API will not connect to MongoDB.

## Recommended Next Improvements

- Move review image storage from base64-in-document to cloud storage or GridFS for larger-scale usage
- Fix the existing lint errors in older components
- Add review moderation or spam protection
- Add loading and error states for project-wide API interactions

## Repository Notes

- The `dev` branch is being used for ongoing changes.
- There is an untracked `app/app/` folder locally that was not included in the review changes or related pushes.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Node.js Driver Docs](https://www.mongodb.com/docs/drivers/node/)
- [Framer Motion Docs](https://www.framer.com/motion/)
