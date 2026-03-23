import Link from "next/link";

export default function FaqPage() {
  return (
    <main className="legal-shell">
      <section className="legal-card">
        <p className="legal-kicker">FAQ</p>
        <h1>Frequently Asked Questions</h1>
        <p><strong>Q:</strong> Is NecroTone subscription-based?</p>
        <p><strong>A:</strong> No. One-time payment with lifetime updates for version 1.</p>
        <p><strong>Q:</strong> Do I need iLok?</p>
        <p><strong>A:</strong> No iLok is required.</p>
        <Link href="/" className="legal-link">Back to Home</Link>
      </section>
    </main>
  );
}
