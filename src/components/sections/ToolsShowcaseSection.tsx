import { toolCatalog } from "@/lib/content/toolCatalog";

export function ToolsShowcaseSection() {
  return (
    <section className="panel" aria-labelledby="tools-title">
      <h2 id="tools-title">AI + Engineering Toolchain</h2>
      <div className="tool-grid">
        {toolCatalog.map((tool) => (
          <article key={tool.id} className="tool-card">
            <h3>{tool.toolName}</h3>
            <p>{tool.category.replace("_", " ")}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
