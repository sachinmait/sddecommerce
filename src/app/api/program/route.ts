import { NextResponse } from "next/server";

import { coordinatorContacts } from "@/lib/content/coordinatorContacts";
import { curriculumWeeks } from "@/lib/content/curriculumWeeks";
import { learningOutcomes } from "@/lib/content/learningOutcomes";
import { programOverview } from "@/lib/content/programOverview";
import { toolCatalog } from "@/lib/content/toolCatalog";

export async function GET() {
  return NextResponse.json(
    {
      program: {
        title: programOverview.title,
        durationWeeks: programOverview.durationWeeks,
        handsOnRatioPercent: programOverview.handsOnRatioPercent,
        philosophy: programOverview.philosophy,
        overview: programOverview.overview,
      },
      curriculum: curriculumWeeks.map((week) => ({
        weekNumber: week.weekNumber,
        moduleTitles: week.moduleTitles,
        summary: week.summary,
      })),
      outcomes: learningOutcomes
        .slice()
        .sort((a, b) => a.displayOrder - b.displayOrder)
        .map((outcome) => outcome.outcomeText),
      tools: toolCatalog
        .slice()
        .sort((a, b) => a.displayOrder - b.displayOrder)
        .map((tool) => ({
          toolName: tool.toolName,
          category: tool.category,
        })),
      contacts: coordinatorContacts
        .filter((contact) => contact.isActive)
        .map((contact) => ({
          name: contact.name,
          roleTitle: contact.roleTitle,
          phone: contact.phone,
          email: contact.email,
        })),
    },
    { status: 200 },
  );
}
