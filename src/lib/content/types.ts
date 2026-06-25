export type ToolCategory =
  | "ai_coding"
  | "collaboration"
  | "database"
  | "deployment"
  | "workflow";

export interface ProgramOffering {
  id: string;
  title: string;
  tagline: string;
  durationWeeks: number;
  handsOnRatioPercent: number;
  philosophy: string;
  overview: string;
}

export interface CurriculumWeek {
  id: string;
  programOfferingId: string;
  weekNumber: number;
  moduleTitles: string[];
  summary: string;
}

export interface LearningOutcome {
  id: string;
  programOfferingId: string;
  outcomeText: string;
  displayOrder: number;
}

export interface ToolCatalogItem {
  id: string;
  programOfferingId: string;
  toolName: string;
  category: ToolCategory;
  displayOrder: number;
}

export interface CoordinatorContact {
  id: string;
  name: string;
  roleTitle: string;
  phone: string;
  email: string;
  isActive: boolean;
}

export type InquiryIntentType = "register_interest" | "ask_question";

export interface InquirySubmission {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  intentType: InquiryIntentType;
  message: string;
  sourcePage: string;
  duplicateSignature: string;
  status: "received" | "duplicate_flagged" | "acknowledged" | "closed";
  submittedAt: string;
}
