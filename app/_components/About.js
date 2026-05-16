const DEFAULT_LEAD =
  "I'm Taufik — a designer obsessed with turning complex systems into seamless, intuitive experiences through thoughtful details and precise execution.";
const DEFAULT_BODY =
  "Over the past six years, I've designed digital products across various industries — focusing on clean interfaces, thoughtful details, and experiences that feel simple, and useful.";

export default function About({ lead, body }) {
  return (
    <section className="shell about" id="about">
      <p className="about-lead t-display reveal">{lead || DEFAULT_LEAD}</p>
      <div className="about-body reveal">
        <p>{body || DEFAULT_BODY}</p>
      </div>
    </section>
  );
}
