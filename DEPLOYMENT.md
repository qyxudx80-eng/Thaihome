# ThaiHome temporary preview deployment

Recommended first preview: Vercel + GitHub. This gives the project a temporary HTTPS preview URL without buying a domain.

## What is ready
- Next.js app structure and initial public homepage
- Prisma schema for PostgreSQL
- A placeholder `/properties` search route
- Vercel project configuration

## What is not ready for public production
The current starter is an early scaffold. It has no authentication, no real listing APIs, no database-backed pages, no image upload, and no complete locale routing. Do not enter real customer information or publish real property listings yet.

## Preview deployment steps
1. Create a private GitHub repository named `thaihome`.
2. Upload/push the contents of this project to the repository root.
3. Sign in to Vercel and import the GitHub repository.
4. Keep the framework preset as Next.js.
5. Deploy. Vercel will issue a temporary `*.vercel.app` HTTPS address.
6. Add environment variables in Vercel before enabling database-backed features:
   - `DATABASE_URL`: PostgreSQL connection string
   - `NEXTAUTH_SECRET`: a long random secret
   - `NEXTAUTH_URL`: the preview URL
7. Redeploy after adding environment variables.

## Database recommendation
Use a managed PostgreSQL service for the shared preview database (for example, Neon or Supabase). Keep production and preview databases separate. Never commit `.env` files or credentials to GitHub.

## Before inviting testers
- Add authentication and server-side role checks.
- Restrict preview access if real or confidential information is added.
- Replace all sample listings with clearly verified data.
- Add a privacy notice and consent handling before collecting inquiries.
