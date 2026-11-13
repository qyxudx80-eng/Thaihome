# ThaiHome — formal development starter

ThaiHome is a multilingual Thailand property platform starter. This repository is the beginning of the production codebase, not a deployed website.

## Product decisions already confirmed
- Brand: ThaiHome
- Markets: Pattaya, Bangkok, Phuket
- Languages: Chinese, English, Thai
- Currency: THB as the primary currency
- Business model: owner-operated first; agent participation can be added later
- Every listing has one assigned agent
- Every listing must be reviewed by the owner/admin before publication
- Contact channels planned: LINE, WhatsApp, phone, website inquiry form
- Responsive desktop/mobile design
- Homepage featured listings are manually selected by the owner

## Stack
- Next.js App Router + TypeScript
- PostgreSQL + Prisma
- `next-intl` dependency reserved for locale routing
- Cloud object storage and map provider to be selected/configured

## Run locally
1. Install Node.js LTS and PostgreSQL.
2. Copy `.env.example` to `.env` and set `DATABASE_URL` and a strong `NEXTAUTH_SECRET`.
3. Run `npm install`.
4. Run `npx prisma generate`.
5. Run `npx prisma migrate dev --name init`.
6. Run `npm run dev` and open http://localhost:3000.

## Important security and release work still required
- Implement authentication, password hashing and server-side role checks (OWNER/ADMIN/AGENT).
- Enforce agent ownership and owner-only approval in server actions/API routes; hiding buttons is not security.
- Add listing CRUD, image upload, lead management and audit log.
- Add Chinese/English/Thai locale routing and translated content validation.
- Configure transactional email/notifications, LINE/WhatsApp contact integrations.
- Add rate limiting, validation, CSRF protections as appropriate, backups, monitoring and privacy/consent flows.
- Replace sample property cards with verified listings and licensed images.
- Add tests, staging environment, production deployment and domain/DNS.

## Workflow
Agent creates or edits a listing -> status `PENDING_REVIEW` -> owner reviews -> `PUBLISHED` or `REJECTED`.
The `featured` flag is controlled by the owner/admin.
