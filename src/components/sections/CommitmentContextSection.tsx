import { commitmentContext } from "@/lib/content/commitmentContext";

export function CommitmentContextSection() {
  return (
    <section className="panel" aria-labelledby="commitment-title">
      <h2 id="commitment-title">Workload and Capstone Context</h2>
      <dl className="definition-grid">
        <div>
          <dt>Practical Balance</dt>
          <dd>{commitmentContext.practicalWeight}</dd>
        </div>
        <div>
          <dt>Capstone</dt>
          <dd>{commitmentContext.capstone}</dd>
        </div>
        <div>
          <dt>Time Expectation</dt>
          <dd>{commitmentContext.timeExpectation}</dd>
        </div>
        <div>
          <dt>Who Succeeds</dt>
          <dd>{commitmentContext.whoSucceeds}</dd>
        </div>
      </dl>
    </section>
  );
}
