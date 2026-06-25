import { targetAudience } from "@/lib/content/programOverview";

export function TargetAudienceSection() {
  return (
    <section className="panel" aria-labelledby="audience-title">
      <h2 id="audience-title">Target Audience</h2>
      <ul className="bullet-list">
        {targetAudience.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
