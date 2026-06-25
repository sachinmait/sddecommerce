"use client";

import { useState } from "react";

import { corePhilosophyModules, curriculumWeeks } from "@/lib/content/curriculumWeeks";

export function CurriculumTimeline() {
  const [activeWeek, setActiveWeek] = useState(1);

  const selectedWeek =
    curriculumWeeks.find((week) => week.weekNumber === activeWeek) ?? curriculumWeeks[0];

  return (
    <section className="panel p-0 overflow-hidden" aria-labelledby="curriculum-title">
      <div className="bg-gradient-to-r from-teal-100 to-amber-100 border-b border-[var(--line)] px-5 py-5 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="eyebrow">Interactive Timeline</p>
            <h2 id="curriculum-title" className="m-0">
              6-Week Curriculum Outline
            </h2>
          </div>
          <div className="rounded-full border border-teal-700/20 bg-white px-3 py-1 text-sm font-semibold text-teal-800">
            60% hands-on lab sessions
          </div>
        </div>
      </div>

      <div className="grid gap-4 px-4 py-4 sm:px-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-6">
        <nav aria-label="Curriculum weeks" className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
          {curriculumWeeks.map((week, index) => {
            const isActive = week.weekNumber === selectedWeek.weekNumber;

            return (
              <button
                key={week.id}
                type="button"
                onClick={() => setActiveWeek(week.weekNumber)}
                style={{ animationDelay: `${index * 70}ms` }}
                className={`rounded-xl border px-3 py-2 text-left transition ${
                  isActive
                    ? "border-teal-700 bg-teal-700 text-white shadow"
                    : "border-[var(--line)] bg-white/90 text-[var(--foreground)] hover:border-teal-300"
                } timeline-week-card`}
              >
                <span className="block text-xs uppercase tracking-[0.1em] opacity-80">Week</span>
                <span className="font-semibold">{week.weekNumber}</span>
                <span className="mt-1 block text-xs leading-5 opacity-90">{week.summary}</span>
              </button>
            );
          })}
        </nav>

        <div className="space-y-4">
          <article
            key={selectedWeek.id}
            className="rounded-2xl border border-[var(--line)] bg-white p-4 shadow-sm timeline-active-panel"
          >
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="week-chip">Week {selectedWeek.weekNumber}</span>
              <h3 className="m-0 text-xl">{selectedWeek.summary}</h3>
            </div>
            <ol className="space-y-2">
              {selectedWeek.moduleTitles.map((line, index) => (
                <li
                  key={`${selectedWeek.id}-${index}`}
                  className="rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--muted)]"
                >
                  {line}
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4">
            <h3 className="mb-3">Core Philosophy: AI-First Software Engineering</h3>
            <div className="grid gap-3 md:grid-cols-3">
              {corePhilosophyModules.map((phase) => (
                <section
                  key={phase.id}
                  className="rounded-xl border border-[var(--line)] bg-white p-3 transition hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <h4 className="text-base font-semibold text-[var(--foreground)]">{phase.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{phase.description}</p>
                </section>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
