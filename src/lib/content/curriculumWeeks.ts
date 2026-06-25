import type { CurriculumWeek } from "@/lib/content/types";

const offeringId = "fullstackx-june-2026";

export const curriculumWeeks: CurriculumWeek[] = [
  {
    id: "wk1",
    programOfferingId: offeringId,
    weekNumber: 1,
    moduleTitles: [
      "Module 1: Git Workflows",
      "branching, pull requests, code reviews, merging, version control in collaborative settings.",
    ],
    summary: "Week 1: Software Development Fundamentals",
  },
  {
    id: "wk2",
    programOfferingId: offeringId,
    weekNumber: 2,
    moduleTitles: [
      "Module 2: CI/CD Pipelines",
      "continuous integration, continuous deployment, monitoring, and the basics of production software.",
    ],
    summary: "Week 2: Deployment Fundamentals",
  },
  {
    id: "wk3",
    programOfferingId: offeringId,
    weekNumber: 3,
    moduleTitles: [
      "Module 3: Advanced GitHub & Collaborative Workflows",
      "integrating code review, large-scale cooperation, code quality practices.",
      "Module 4: AI-Augmented Coding",
      "using AI tools to assist writing, refactoring, debugging, accelerating development.",
    ],
    summary: "Week 3: Advanced GitHub & AI-Augmented Coding",
  },
  {
    id: "wk4",
    programOfferingId: offeringId,
    weekNumber: 4,
    moduleTitles: [
      "Module 5: Tools, Libraries & Artifacts",
      "selecting frameworks, libraries, artifacts; understanding how full-stack pieces fit together.",
      "Module 6: Database Schema Design",
      "designing data models, using Supabase, integrating with AI-enabled workflows.",
    ],
    summary: "Week 4: Architecture Planning & Data Layer",
  },
  {
    id: "wk5",
    programOfferingId: offeringId,
    weekNumber: 5,
    moduleTitles: [
      "Module 7: Test-Driven / Spec-Driven Development with SpecKit",
      "writing specs, verifying code against specs, ensuring code meets defined behaviors.",
      "Module 8: Capstone Project (Assigned Project, 12 Weeks Duration)",
      "building a full-stack application from spec to deployment; applying all learned tools and practices.",
    ],
    summary: "Week 5: Spec-Driven Development & Capstone",
  },
  {
    id: "wk6",
    programOfferingId: offeringId,
    weekNumber: 6,
    moduleTitles: [
      "Module 9: Authentication & API Security",
      "securing applications, user auth, API gateways, permissions.",
      "Module 10: Quality Gates & Code Security",
      "code auditing, security checks, ensuring high quality in AI-driven code environments.",
    ],
    summary: "Week 6: Code & Data Security",
  },
];

export const corePhilosophyModules = [
  {
    id: "ph-1",
    title: "AI-Powered Creation",
    description:
      "For beginners, we begin with natural-language prompts and AI tools that generate functional code,starting with minimal syntax and debugging knowledge. This phase lowers the barrier to entry and makes programming accessible.",
  },
  {
    id: "ph-2",
    title: "AI-Augmented Development",
    description:
      "As learners progress, we introduce how AI tools (e.g., GitHub Copilot, Claude Code) assist in refining, debugging, suggesting, and accelerating code. Developers learn to think in terms of \"How can AI help me\" rather than \"I must write every line.\"",
  },
  {
    id: "ph-3",
    title: "Structured Software Engineering",
    description:
      "Finally, we transition into disciplined engineering practices: version control, database design, specification-driven development, collaborative workflows, deployment, monitoring, and maintenance. Learners see how AI becomes an integral part of the full software lifecycle, not just a toy.",
  },
] as const;
