# Cloud Computing — Lab 8: Frontend Deployment with Vercel

**Name:** Muhammad Armaghan
**Roll Number:** 01-131232-050
**Lab Number:** Lab 8
**Course:** Cloud Computing — Bahria University

**Vercel Production URL:** _(add your URL after deployment)_

---

## Lab Overview

This project demonstrates:
- Frontend deployment to Vercel using Next.js
- Serverless API Routes (`/api/hello`, `/api/student/[id]`, `/api/submit`)
- Edge Functions & Middleware (`/api/geo`, `middleware.ts`)
- Environment Variables (public vs secret)
- Preview Deployments via Git branching

## API Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/api/hello` | GET | Basic serverless function |
| `/api/student/[id]` | GET | Dynamic route with URL parameter |
| `/api/submit` | POST | Accepts JSON body |
| `/api/geo` | GET | Edge function — geolocation (production only) |

## Running Locally

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_APP_NAME=Lab8_App
NEXT_PUBLIC_STUDENT_NAME=Muhammad Armaghan
API_SECRET_KEY=my-secret-123
```
