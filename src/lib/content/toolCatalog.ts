import type { ToolCatalogItem } from "@/lib/content/types";

const offeringId = "fullstackx-june-2026";

export const toolCatalog: ToolCatalogItem[] = [
  { id: "tool-1", programOfferingId: offeringId, toolName: "GitHub", category: "collaboration", displayOrder: 1 },
  { id: "tool-2", programOfferingId: offeringId, toolName: "GitHub Copilot", category: "ai_coding", displayOrder: 2 },
  { id: "tool-3", programOfferingId: offeringId, toolName: "GitHub Agent", category: "ai_coding", displayOrder: 3 },
  { id: "tool-4", programOfferingId: offeringId, toolName: "Claude Code", category: "ai_coding", displayOrder: 4 },
  { id: "tool-5", programOfferingId: offeringId, toolName: "Gemini 2.5", category: "ai_coding", displayOrder: 5 },
  { id: "tool-6", programOfferingId: offeringId, toolName: "GLM 4.5", category: "ai_coding", displayOrder: 6 },
  { id: "tool-7", programOfferingId: offeringId, toolName: "Bolt", category: "workflow", displayOrder: 7 },
  { id: "tool-8", programOfferingId: offeringId, toolName: "Lovable", category: "workflow", displayOrder: 8 },
  { id: "tool-9", programOfferingId: offeringId, toolName: "Replit", category: "workflow", displayOrder: 9 },
  { id: "tool-10", programOfferingId: offeringId, toolName: "Supabase", category: "database", displayOrder: 10 },
  { id: "tool-11", programOfferingId: offeringId, toolName: "SpecKit", category: "workflow", displayOrder: 11 },
  { id: "tool-12", programOfferingId: offeringId, toolName: "Vercel", category: "deployment", displayOrder: 12 },
];
