"use client";

import { programOverview } from "@/lib/content/programOverview";

export function CourseOverviewSection() {
  return (
    <section className="panel hero-panel" aria-labelledby="overview-title">
      <p className="eyebrow animate-fade-up" style={{ animationDelay: "0ms" }}>
        Register Today
      </p>
      <h1
        id="overview-title"
        className="display-title animate-title-reveal"
        style={{ animationDelay: "100ms" }}
      >
        {programOverview.title}
      </h1>
      <p className="tagline animate-fade-up" style={{ animationDelay: "300ms" }}>
        {programOverview.tagline}
      </p>
      <p className="lead animate-fade-up" style={{ animationDelay: "400ms" }}>
        {programOverview.overview}
      </p>
      <div className="stat-row" role="list" aria-label="Program highlights">
        <div
          className="stat animate-stat-pop"
          role="listitem"
          style={{ animationDelay: "500ms" }}
        >
          <span className="stat-label">Duration</span>
          <strong>{programOverview.durationWeeks} Weeks</strong>
        </div>
        <div
          className="stat animate-stat-pop"
          role="listitem"
          style={{ animationDelay: "600ms" }}
        >
          <span className="stat-label">Hands-on Labs</span>
          <strong>{programOverview.handsOnRatioPercent}%</strong>
        </div>
        <div
          className="stat animate-stat-pop"
          role="listitem"
          style={{ animationDelay: "700ms" }}
        >
          <span className="stat-label">Philosophy</span>
          <strong>{programOverview.philosophy}</strong>
        </div>
      </div>
    </section>
  );
}
