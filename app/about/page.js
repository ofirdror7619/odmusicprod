import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="legal-shell">
      <section className="legal-card">
        <p className="legal-kicker">About</p>
        <h1>Ofir Dror Music Production</h1>
        <p>
          We build focused audio tools for heavy guitar production with a balance of modern precision and raw character.
        </p>
        <p>
          NecroTone was designed to move from sketch to mix quickly, without losing aggression in dense sessions.
        </p>
        <Link href="/" className="legal-link">Back to Home</Link>
      </section>
    </main>
  );
}
