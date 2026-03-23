import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="legal-shell">
      <section className="legal-card">
        <p className="legal-kicker">Contact</p>
        <h1>Get In Touch</h1>
        <p>Email: contact@ofirdrormusicproduction.com</p>
        <p>Location: Tel Aviv, Israel</p>
        <p>Support hours: Sunday-Thursday, 10:00-18:00 (IST)</p>
        <Link href="/" className="legal-link">Back to Home</Link>
      </section>
    </main>
  );
}
