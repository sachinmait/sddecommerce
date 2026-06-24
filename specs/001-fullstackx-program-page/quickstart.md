# Quickstart: FullStackX Program Information and Registration

This guide validates the feature end-to-end after implementation.

## Prerequisites

- Node.js 20+
- npm 10+
- Supabase project and credentials
- Environment variables configured for runtime and test environment

## Setup

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables:

```bash
cp .env.example .env.local
# Set Supabase URL and key variables
```

3. Apply database migration(s):

```bash
npm run db:migrate
```

4. Start development server:

```bash
npm run dev
```

## Validation Scenarios

### Scenario A: Program discovery content (US1)

1. Open the program page in a browser.
2. Confirm visible sections include: overview, target audience, duration, philosophy, tools list, and week-by-week curriculum.
3. Verify Week 1 through Week 6 content is present and correctly ordered.

Expected outcome:

- Users can identify course duration, audience fit, and curriculum structure in one session.

### Scenario B: Outcomes and commitment evaluation (US2)

1. Navigate to learning outcomes section.
2. Confirm outcomes list is present and understandable for non-technical learners.
3. Confirm capstone and practical delivery expectations are explicit.

Expected outcome:

- User can make an enrollment fit decision without external documents.

### Scenario C: Inquiry submission flow (US3)

1. Open inquiry form.
2. Submit valid payload with required fields.
3. Confirm success acknowledgement is displayed.
4. Submit invalid payload (missing required field).
5. Confirm field-level validation feedback appears.
6. Submit same payload repeatedly within duplicate window.
7. Confirm duplicate-handling response is returned.

Expected outcome:

- Valid submissions are accepted and acknowledged.
- Invalid submissions are rejected with actionable feedback.
- Duplicate submissions are flagged according to contract.

## Contract Validation

Run contract and API verification aligned with [contracts/program-inquiry.openapi.yaml](./contracts/program-inquiry.openapi.yaml):

```bash
npm run test:contract
```

Expected outcome:

- Endpoint behavior conforms to request/response schemas and status codes.

## Test Suite

Run full validation suite:

```bash
npm run test
npm run test:e2e
```

Expected outcome:

- All tests for content rendering, inquiry validation, and submission journey pass.

## Data Model Reference

For entity rules and lifecycle behavior, see [data-model.md](./data-model.md).
