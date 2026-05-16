import WorkCard from "./WorkCard";

export default function Works({ works }) {
  return (
    <section className="shell" id="works">
      <div className="section-head">
        <div className="label">
          <span className="t-eyebrow"></span>
        </div>
        <h2>
          A few things <em>I'm proud</em>
          <br />
          of having shipped.
        </h2>
      </div>
      <div className="works-grid">
        {works.map((w, i) => (
          <WorkCard key={w.slug} w={w} i={i} />
        ))}
      </div>
    </section>
  );
}
