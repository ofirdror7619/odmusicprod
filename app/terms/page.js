import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="legal-shell">
      <section className="legal-card">
        <p className="legal-kicker">Terms</p>
        <h1>Terms of Use</h1>
        <p>
          Purchase grants a non-transferable license for personal and commercial music production use.
        </p>
        <p>
          Redistribution, resale, and reverse engineering of the plugin binaries are not permitted.
        </p>
        <Link href="/" className="legal-link">Back to Home</Link>
      </section>
    </main>
  );
}
