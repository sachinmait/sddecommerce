# Data Model: FullStackX Program Information and Registration

## Entity: ProgramOffering

- Purpose: Canonical representation of one FullStackX offering shown to visitors.
- Fields:
  - id (string, required, stable identifier)
  - title (string, required)
  - tagline (string, required)
  - duration_weeks (integer, required, expected value: 6)
  - hands_on_ratio_percent (integer, required, range: 0-100)
  - philosophy (string, required)
  - overview (string, required)
  - created_at (datetime, required)
  - updated_at (datetime, required)
- Relationships:
  - One-to-many with CurriculumWeek
  - One-to-many with LearningOutcome
  - One-to-many with ToolCatalogItem

## Entity: CurriculumWeek

- Purpose: Week-by-week curriculum breakdown.
- Fields:
  - id (string, required)
  - program_offering_id (string, required, foreign key to ProgramOffering)
  - week_number (integer, required, range: 1-6)
  - module_titles (array[string], required)
  - summary (string, required)
- Validation Rules:
  - week_number values must be unique per program_offering_id
  - module_titles must contain at least one module title

## Entity: LearningOutcome

- Purpose: Measurable post-course capabilities presented to learners.
- Fields:
  - id (string, required)
  - program_offering_id (string, required, foreign key)
  - outcome_text (string, required)
  - display_order (integer, required)
- Validation Rules:
  - display_order unique per program_offering_id
  - outcome_text must be non-empty and user-facing

## Entity: ToolCatalogItem

- Purpose: Catalog of tools and platforms referenced in the program.
- Fields:
  - id (string, required)
  - program_offering_id (string, required, foreign key)
  - tool_name (string, required)
  - category (enum, required: ai_coding, collaboration, database, deployment, workflow)
  - display_order (integer, required)

## Entity: CoordinatorContact

- Purpose: Official inquiry contact information shown to users.
- Fields:
  - id (string, required)
  - name (string, required)
  - role_title (string, required)
  - phone (string, required)
  - email (string, required)
  - is_active (boolean, required, default true)
- Validation Rules:
  - email must conform to standard email format
  - at least one active contact must exist

## Entity: InquirySubmission

- Purpose: Stored user inquiry/registration intent.
- Fields:
  - id (uuid, required)
  - full_name (string, required)
  - email (string, required)
  - phone (string, optional)
  - intent_type (enum, required: register_interest, ask_question)
  - message (string, required)
  - source_page (string, required)
  - submitted_at (datetime, required)
  - duplicate_signature (string, required)
  - status (enum, required: received, duplicate_flagged, acknowledged, closed)
- Validation Rules:
  - full_name length: 2-120
  - message length: 10-2000
  - email required for acknowledgement path
  - duplicate_signature generated from normalized contact+intent payload

## State Transitions: InquirySubmission

- received -> acknowledged
  - Trigger: coordinator follow-up workflow confirms first response sent
- received -> duplicate_flagged
  - Trigger: duplicate detection finds equivalent recent submission
- duplicate_flagged -> acknowledged
  - Trigger: manual review confirms valid follow-up needed
- acknowledged -> closed
  - Trigger: inquiry fully resolved or converted into offline admission process

## Traceability Notes

- FR-001..FR-005 map primarily to ProgramOffering, CurriculumWeek, LearningOutcome, ToolCatalogItem.
- FR-006..FR-010 map primarily to InquirySubmission and CoordinatorContact.
- FR-011 maps to rendering behavior and validation scenarios in quickstart.
