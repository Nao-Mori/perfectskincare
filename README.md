# SkinMatch.io — Your Personalized Skincare Assistant 🧴✨

**Live DEMO: https://perfectskincare.vercel.app**

## ⚠️ Disclaimer

This project was fully designed and implemented by me as an original work.

- 🧠 I used **ChatGPT** to assist with routine coding chores (e.g., boilerplate, minor bug fixes) and some CSS design refinements.
- ✋ I did **not** copy any existing project or follow along with a tutorial.
- 🎯 All architecture, features, and implementation decisions were made by me to demonstrate my skills.

## 🛠 Tech Stack

**Framework & Language**

- ⚡ **Next.js (App Router) + TypeScript** — performant SSR/ISR/CSR, file-based routing, SEO-optimized rendering

**API Layer**

- 🔄 **React Query** for data fetching, caching, and mutation handling
- RESTful API endpoints with optimized revalidation

**Database & ORM**

- 🗄 **Prisma** connected to a relational database
- Stores user, product, and review data with type-safe queries

**File & Image Handling**

- 🖼 **AWS S3** for image storage
- 🌍 **CloudFront CDN** for fast global delivery of uploaded assets

**Authentication & Security**

- 🔑 **NextAuth.js** with **Google OAuth**
- Secure sessions and protected API routes

**Internationalization**

- 🌐 **next-intl** for multi-language support
- Available in English, Japanese, and Korean

**UI/UX & Styling**

- 🎨 **Tailwind CSS** for responsive, utility-first styling
- ✨ **lucide-react** icons for a clean modern look
- Intuitive, mobile-friendly design

**CI/CD & Deployment**

- 🚀 **Vercel** for automatic continuous integration and deployment
- 🌐 Instant previews on every pull request
- ☁️ Future deployment plan with **AWS** (ECS/Lambda + RDS) for scalability and fine-grained infrastructure control

**Testing**

- 🧪 **Jest** for unit testing
- Ensures core logic and utilities work reliably

**Tooling & Quality**

- 🧩 TypeScript strict mode
- ✅ ESLint + Prettier for linting and formatting
- ⚙️ GitHub Actions for build + lint checks

## 🚀 Features

- 🔒 **Authentication with Google**  
  Built-in OAuth2 with Firebase or NextAuth (TBD) for smooth and secure login.

- 🛍️ **Smart Product Search**  
  Intelligent product matching based on ingredient profiles, skin type, and user concerns.

- 🤖 **AI-Powered Matching (coming soon)**
  Natural language processing to interpret user skin goals and issues (e.g. "Heavy cream breaks me out").

- 🌎 **Scalable Design**  
  Built with modular components and clean architecture — ready to scale into a full SaaS.

## 🎯 Purpose

This project is part of my **developer portfolio** and reflects my passion for:

- 🧠 AI x UX
- 💻 Modern front-end development
- 💖 Empowering users through accessible, smart design

## 📸 Screenshots (Coming soon)

## 🛠️ Setup

```bash
npm install
npm run dev
```
