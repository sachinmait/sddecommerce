# Tasks: FullStackX Program Information and Registration

**Input**: Design documents from `/specs/001-fullstackx-program-page/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/program-inquiry.openapi.yaml, quickstart.md

**Tests**: Test tasks are included for each story because behavior changes require verifiable quality evidence.

**Organization**: Tasks are grouped by user story so each story can be implemented and tested independently.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize project skeleton and developer tooling.

- [ ] T001 Create Next.js app skeleton and root route in app/page.tsx
- [ ] T002 Initialize project scripts and dependencies in package.json
- [ ] T003 [P] Configure TypeScript and path aliases in tsconfig.json
- [ ] T004 [P] Configure linting/formatting rules in eslint.config.js
- [ ] T005 [P] Add environment variable examples in .env.example

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure required before story implementation.

**CRITICAL**: No user story implementation starts until this phase is complete.

- [ ] T006 Create Supabase migration for inquiry table and indexes in supabase/migrations/001_create_inquiries.sql
- [ ] T007 [P] Implement Supabase server client factory in lib/data/supabaseServer.ts
- [ ] T008 [P] Define shared domain types for program entities in lib/content/types.ts
- [ ] T009 [P] Implement shared Zod schemas for inquiry validation in lib/validation/inquirySchema.ts
- [ ] T010 Implement API error/response helpers in lib/data/apiResponses.ts
- [ ] T011 Implement duplicate signature helper in lib/validation/duplicateSignature.ts
- [ ] T012 Add base API route wiring for inquiry endpoint in app/api/inquiries/route.ts
- [ ] T013 Add base API route wiring for program endpoint in app/api/program/route.ts

**Checkpoint**: Foundation complete; user stories can proceed in parallel.

---

## Phase 3: User Story 1 - Explore Program Value and Curriculum (Priority: P1) MVP

**Goal**: Present course overview, audience fit, tools, and week-wise curriculum clearly.

**Independent Test**: Open the program page and confirm overview, audience, tools, and Week 1-6 curriculum are visible and correctly ordered.

### Tests for User Story 1

- [ ] T014 [P] [US1] Add contract test for GET /api/program response schema in tests/contract/program-content.contract.test.ts
- [ ] T015 [P] [US1] Add integration test for program discovery journey in tests/integration/program-discovery.integration.test.ts

### Implementation for User Story 1

- [ ] T016 [P] [US1] Add program overview and audience content dataset in lib/content/programOverview.ts
- [ ] T017 [P] [US1] Add week-by-week curriculum dataset in lib/content/curriculumWeeks.ts
- [ ] T018 [P] [US1] Add tool catalog dataset in lib/content/toolCatalog.ts
- [ ] T019 [US1] Implement GET /api/program content assembly in app/api/program/route.ts
- [ ] T020 [P] [US1] Build course overview section component in components/sections/CourseOverviewSection.tsx
- [ ] T021 [P] [US1] Build target audience section component in components/sections/TargetAudienceSection.tsx
- [ ] T022 [P] [US1] Build curriculum timeline component in components/curriculum/CurriculumTimeline.tsx
- [ ] T023 [P] [US1] Build tools showcase component in components/sections/ToolsShowcaseSection.tsx
- [ ] T024 [US1] Compose discovery page layout with US1 sections in app/page.tsx

**Checkpoint**: US1 is independently functional and testable.

---

## Phase 4: User Story 2 - Evaluate Outcomes and Commitment (Priority: P2)

**Goal**: Help visitors evaluate outcomes, workload expectations, and commitment.

**Independent Test**: Navigate outcomes and commitment sections and verify learners can infer expected skills and course commitment without external docs.

### Tests for User Story 2

- [ ] T025 [P] [US2] Add integration test for outcomes evaluation flow in tests/integration/outcomes-evaluation.integration.test.ts
- [ ] T026 [P] [US2] Add component test for outcomes and commitment rendering in tests/unit/outcomes-sections.unit.test.tsx

### Implementation for User Story 2

- [ ] T027 [P] [US2] Add learning outcomes dataset in lib/content/learningOutcomes.ts
- [ ] T028 [P] [US2] Add workload and capstone context dataset in lib/content/commitmentContext.ts
- [ ] T029 [P] [US2] Build learning outcomes section component in components/sections/LearningOutcomesSection.tsx
- [ ] T030 [P] [US2] Build commitment context section component in components/sections/CommitmentContextSection.tsx
- [ ] T031 [US2] Integrate outcomes and commitment sections into page composition in app/page.tsx
- [ ] T032 [US2] Add analytics event hooks for outcomes engagement in lib/data/engagementEvents.ts

**Checkpoint**: US2 is independently functional and testable.

---

## Phase 5: User Story 3 - Register Interest and Contact Organizers (Priority: P3)

**Goal**: Provide reliable inquiry submission and coordinator contact pathways.

**Independent Test**: Submit valid/invalid/duplicate inquiries and verify confirmations, validation feedback, and duplicate handling.

### Tests for User Story 3

- [ ] T033 [P] [US3] Add contract test for POST /api/inquiries status codes and payloads in tests/contract/inquiry-submit.contract.test.ts
- [ ] T034 [P] [US3] Add integration test for inquiry form validation and success path in tests/integration/inquiry-submission.integration.test.ts
- [ ] T035 [P] [US3] Add integration test for duplicate inquiry handling in tests/integration/inquiry-duplicate.integration.test.ts

### Implementation for User Story 3

- [ ] T036 [P] [US3] Add coordinator contacts dataset in lib/content/coordinatorContacts.ts
- [ ] T037 [P] [US3] Build inquiry form component with client validation in components/forms/InquiryForm.tsx
- [ ] T038 [P] [US3] Build coordinator contact section component in components/sections/CoordinatorContactSection.tsx
- [ ] T039 [US3] Implement POST /api/inquiries validation and persistence in app/api/inquiries/route.ts
- [ ] T040 [US3] Implement duplicate inquiry window check in app/api/inquiries/route.ts
- [ ] T041 [US3] Add acknowledgement and error messaging states in components/forms/InquiryForm.tsx
- [ ] T042 [US3] Integrate inquiry and contact sections into page composition in app/page.tsx

**Checkpoint**: US3 is independently functional and testable.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improve quality across stories and finalize release readiness.

- [ ] T043 [P] Add responsive behavior and accessibility refinements in app/page.tsx
- [ ] T044 [P] Add final API contract fixture examples in tests/contract/fixtures/program-inquiry.examples.json
- [ ] T045 Run quickstart scenario validation and update run notes in specs/001-fullstackx-program-page/quickstart.md
- [ ] T046 [P] Add documentation for setup, env vars, and test commands in README.md
- [ ] T047 Run full test suite and capture evidence in tests/integration/test-run-report.md

---

## Dependencies & Execution Order

### Phase Dependencies

- Setup (Phase 1): starts immediately.
- Foundational (Phase 2): depends on Setup completion and blocks all user story phases.
- User Story phases (Phase 3-5): depend on Foundational completion.
- Polish (Phase 6): depends on completion of selected user stories.

### User Story Dependencies

- US1 (P1): depends only on Foundational phase.
- US2 (P2): depends only on Foundational phase; can run in parallel with US1 after foundations.
- US3 (P3): depends only on Foundational phase; can run in parallel with US1/US2 after foundations.

### Within Each User Story

- Tests first, and they should fail before implementation.
- Content/data definitions before API/section composition.
- API and UI integration before final checkpoint validation.

## Parallel Opportunities

- Setup parallel tasks: T003, T004, T005.
- Foundational parallel tasks: T007, T008, T009.
- US1 parallel tasks: T014/T015, T016/T017/T018, T020/T021/T022/T023.
- US2 parallel tasks: T025/T026, T027/T028, T029/T030.
- US3 parallel tasks: T033/T034/T035, T036/T037/T038.
- Polish parallel tasks: T043, T044, T046.

## Parallel Example: User Story 1

- Run together: T014 and T015.
- Run together: T016, T017, and T018.
- Run together: T020, T021, T022, and T023.

## Parallel Example: User Story 2

- Run together: T025 and T026.
- Run together: T027 and T028.
- Run together: T029 and T030.

## Parallel Example: User Story 3

- Run together: T033, T034, and T035.
- Run together: T036, T037, and T038.

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 Setup.
2. Complete Phase 2 Foundational.
3. Complete Phase 3 User Story 1.
4. Validate US1 independently using T014, T015, and page-level checks.
5. Demo/deploy MVP.

### Incremental Delivery

1. Deliver US1 after foundations for immediate value.
2. Deliver US2 as a second increment focused on decision confidence.
3. Deliver US3 as a third increment for inquiry conversion.
4. Complete Polish phase and final validation.

### Parallel Team Strategy

1. Team completes Setup and Foundational phases together.
2. Then assign: Engineer A to US1, Engineer B to US2, Engineer C to US3.
3. Merge story increments independently after passing tests.
