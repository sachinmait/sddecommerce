"use client";

import { useEffect } from "react";

import { learningOutcomes } from "@/lib/content/learningOutcomes";
import { trackEngagementEvent } from "@/lib/data/engagementEvents";

export function LearningOutcomesSection() {
  useEffect(() => {
    trackEngagementEvent({ section: "learning-outcomes", action: "view" });
  }, []);

  return (
    <section className="panel" aria-labelledby="outcomes-title">
      <h2 id="outcomes-title">Learning Outcomes</h2>
      <ul className="bullet-list">
        {learningOutcomes
          .slice()
          .sort((a, b) => a.displayOrder - b.displayOrder)
          .map((outcome) => (
            <li key={outcome.id}>{outcome.outcomeText}</li>
          ))}
      </ul>
    </section>
  );
}
