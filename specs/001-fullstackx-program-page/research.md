# Research: FullStackX Program Information and Registration

## Decision 1: Use a Next.js web application with integrated API route for inquiries

- Decision: Implement the experience as a single Next.js app with server-side API endpoints for inquiry submission.
- Rationale: This keeps the architecture minimal while allowing both content rendering and form submission in one deployable unit.
- Alternatives considered: Separate frontend/backend projects (rejected due to unnecessary complexity for v1), static-only site with external form provider (rejected due to reduced contract control and data traceability).

## Decision 2: Persist inquiry records in Supabase Postgres

- Decision: Store inquiry submissions in Supabase Postgres with server-side inserts.
- Rationale: Managed Postgres provides reliable persistence, queryability for follow-up, and aligns with the program's stated ecosystem.
- Alternatives considered: Local file storage (rejected due to durability and concurrency risk), email-only forwarding (rejected due to poor structured tracking).

## Decision 3: Define explicit API contract for inquiry capture

- Decision: Publish an OpenAPI contract for inquiry creation and retrieval of program metadata.
- Rationale: Contract-first design supports traceability, enables contract testing, and reduces ambiguity for implementation.
- Alternatives considered: Ad hoc API shape in code comments only (rejected due to weak testability), GraphQL schema (rejected due to unnecessary overhead for current scope).

## Decision 4: Keep curriculum and outcomes content as structured static data in v1

- Decision: Model course details as versioned structured content in repository (JSON/TS objects) rather than CMS integration.
- Rationale: This avoids introducing external content management complexity while preserving predictable rendering and reviewability.
- Alternatives considered: Headless CMS (rejected due to setup overhead), hardcoded JSX strings only (rejected due to lower maintainability and weaker structure).

## Decision 5: Validation and anti-duplicate strategy for inquiries

- Decision: Enforce schema validation for required fields and implement duplicate detection window using contact + intent signature + time bound.
- Rationale: Prevents malformed records and reduces coordinator noise from repeated accidental submissions.
- Alternatives considered: Client-only validation (rejected due to bypass risk), no duplicate control (rejected due to operational follow-up overhead).

## Decision 6: Quality evidence strategy across UI and API boundaries

- Decision: Use unit/component tests for content rendering behavior, integration/e2e tests for inquiry journey, and contract tests for API payload compliance.
- Rationale: This satisfies constitution quality evidence requirements and provides confidence at feature boundaries.
- Alternatives considered: E2E-only testing (rejected due to slower diagnosis), unit-only testing (rejected due to lack of end-to-end confidence).

## Decision 7: Deployment target and runtime constraints

- Decision: Deploy on Vercel with environment-based Supabase configuration and monitoring for inquiry endpoint response quality.
- Rationale: Fast deployment workflow and hosting fit for Next.js, with operational observability for submission reliability.
- Alternatives considered: Self-hosted Node runtime (rejected due to higher ops burden), static deployment without server runtime (rejected due to inquiry persistence needs).
