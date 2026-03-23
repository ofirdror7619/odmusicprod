import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="legal-shell">
      <section className="legal-card">
        <p className="legal-kicker">Privacy</p>
        <h1>Privacy Policy</h1>
        <p>
          We only collect information needed to process purchases, provide downloads, and respond to support requests.
        </p>
        <p>
          We do not sell personal data to third parties. Payment details are processed by secure payment providers.
        </p>
        <Link href="/" className="legal-link">Back to Home</Link>
      </section>
    </main>
  );
}
