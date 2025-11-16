import React from "react";
export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Full‑Stack Web Developer</h1>
        <p>
          Developer trained at CIFO L’Hospitalet (Front‑End: JS + React) and IT
          Academy (Back‑End: Java + Spring). Background in event organization
          and teaching. Academic training in Philosophy and Mathematics,
          bringing analytical thinking, strategic planning, and a calm,
          solution‑oriented mindset.
        </p>
        <div className="cta">
          <a
            className="button"
            href="#portfolio"
            aria-label="Jump to portfolio"
          >
            View my work
          </a>
          <a
            className="button ghost"
            href="https://www.linkedin.com/in/aurelien-darbellay/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="button ghost"
            href="https://github.com/aurelien-darbellay"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
