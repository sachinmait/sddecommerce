# FullStackX Program Page

Learner-facing FullStackX discovery and inquiry experience built with Next.js App Router.

## Prerequisites

- Node.js 20+
- npm 10+

## Environment

Create a local environment file from template:

```bash
cp .env.example .env.local
```

Set values for Supabase keys and duplicate-window configuration before using the inquiry persistence flow.

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Database Migrations

```bash
npm run db:migrate
```

This command lists migration files under `supabase/migrations/` for application through your Supabase deployment workflow.

## Quality Commands

```bash
npm run lint
npm run test:contract
npm run test
npm run test:e2e
```

## Core Paths

- App entry: `src/app/page.tsx`
- Program API: `src/app/api/program/route.ts`
- Inquiry API: `src/app/api/inquiries/route.ts`
- Contract: `specs/001-fullstackx-program-page/contracts/program-inquiry.openapi.yaml`
- Test report: `tests/integration/test-run-report.md`
