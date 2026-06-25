import type { LearningOutcome } from "@/lib/content/types";

const offeringId = "fullstackx-june-2026";

export const learningOutcomes: LearningOutcome[] = [
  {
    id: "outcome-1",
    programOfferingId: offeringId,
    outcomeText:
      "Apply an AI-first engineering mindset across ideation, coding, review, and deployment.",
    displayOrder: 1,
  },
  {
    id: "outcome-2",
    programOfferingId: offeringId,
    outcomeText:
      "Use modern AI coding tools to generate, debug, and refine production-oriented code.",
    displayOrder: 2,
  },
  {
    id: "outcome-3",
    programOfferingId: offeringId,
    outcomeText:
      "Collaborate through Git-based workflows with pull requests, reviews, and merge discipline.",
    displayOrder: 3,
  },
  {
    id: "outcome-4",
    programOfferingId: offeringId,
    outcomeText:
      "Design and integrate database-backed full-stack features with Supabase.",
    displayOrder: 4,
  },
  {
    id: "outcome-5",
    programOfferingId: offeringId,
    outcomeText:
      "Deploy and monitor a complete project using a cloud platform workflow.",
    displayOrder: 5,
  },
];
