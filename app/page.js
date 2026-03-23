"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const grimoireLines = [
  { text: "IN TENEBRIS SONUS VIVIT", x: "3%", y: "10%", d: "0s", t: "11s", r: "0deg", s: "0.8rem" },
  { text: "RITUS FERRI ET CARNIS", x: "86%", y: "12%", d: "0.3s", t: "12.6s", r: "0deg", s: "0.8rem" },
  { text: "NOCTIS AMPLIFICATOR", x: "5%", y: "17%", d: "0.6s", t: "10.8s", r: "0deg", s: "0.79rem" },
  { text: "SIGILLUM DISTORTIONIS", x: "84%", y: "19%", d: "0.9s", t: "12.2s", r: "0deg", s: "0.78rem" },
  { text: "IGNIS IN CHORDA", x: "4%", y: "24%", d: "1.2s", t: "11.2s", r: "0deg", s: "0.81rem" },
  { text: "UMBRA CABINAE", x: "87%", y: "26%", d: "1.5s", t: "12s", r: "0deg", s: "0.79rem" },
  { text: "TREMOLORUM MALLEUS", x: "6%", y: "31%", d: "1.8s", t: "10.4s", r: "0deg", s: "0.8rem" },
  { text: "NEXUS NECROTONE", x: "85%", y: "33%", d: "2.1s", t: "11.6s", r: "0deg", s: "0.8rem" },
  { text: "ARCANUM SANGUINIS", x: "2%", y: "39%", d: "2.4s", t: "12.8s", r: "0deg", s: "0.78rem" },
  { text: "FUROR IN FREQUENTIA", x: "88%", y: "41%", d: "2.7s", t: "11.3s", r: "0deg", s: "0.8rem" },
  { text: "TENOR CALIGINIS", x: "4%", y: "46%", d: "3s", t: "10.9s", r: "0deg", s: "0.77rem" },
  { text: "RUNA SATURATIONIS", x: "86%", y: "48%", d: "3.3s", t: "12.5s", r: "0deg", s: "0.79rem" },
  { text: "CHORDAE FERALES", x: "5%", y: "53%", d: "3.6s", t: "11.1s", r: "0deg", s: "0.81rem" },
  { text: "MURUS FRIGORIS", x: "84%", y: "55%", d: "3.9s", t: "12.1s", r: "0deg", s: "0.78rem" },
  { text: "MORS HARMONICA", x: "3%", y: "60%", d: "4.2s", t: "10.7s", r: "0deg", s: "0.8rem" },
  { text: "VULTUS NIGER", x: "88%", y: "62%", d: "4.5s", t: "11.8s", r: "0deg", s: "0.8rem" },
  { text: "CAVUM DRONIS", x: "6%", y: "67%", d: "4.8s", t: "12.4s", r: "0deg", s: "0.78rem" },
  { text: "LUX IN CINERE", x: "85%", y: "69%", d: "5.1s", t: "10.6s", r: "0deg", s: "0.79rem" },
  { text: "SEPTEM SONITUS", x: "2%", y: "74%", d: "5.4s", t: "11.9s", r: "0deg", s: "0.8rem" },
  { text: "FERROX TREMOR", x: "87%", y: "76%", d: "5.7s", t: "12.7s", r: "0deg", s: "0.8rem" },
  { text: "UMBRAE CADENT", x: "4%", y: "81%", d: "6s", t: "10.5s", r: "0deg", s: "0.79rem" },
  { text: "AURIS IN NOCTE", x: "84%", y: "83%", d: "6.3s", t: "11.4s", r: "0deg", s: "0.78rem" },
  { text: "RITUS SONORUS", x: "5%", y: "88%", d: "6.6s", t: "12.3s", r: "0deg", s: "0.81rem" },
  { text: "FRACTA CABINA", x: "86%", y: "90%", d: "6.9s", t: "11.7s", r: "0deg", s: "0.79rem" },
];

const audioExamples = [
  { label: "Black Metal Rhythm", before: "/audio/demo-clean.wav", after: "/audio/demo-necrotone.wav" },
  { label: "Death Metal Lead", before: "/audio/demo-clean.wav", after: "/audio/demo-necrotone.wav" },
  { label: "Clean To Brutal", before: "/audio/demo-clean.wav", after: "/audio/demo-necrotone.wav" },
];

const product = {
  id: "necrotone-vst",
  name: "NecroTone - Black Metal Distortion VST",
  price: 39,
};

export default function HomePage() {
  const [drift, setDrift] = useState({ x: 0, y: 0 });
  const [cartQty, setCartQty] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = () => {
    setCartQty((prev) => prev + 1);
    setIsCartOpen(true);
  };

  const removeOneFromCart = () => {
    setCartQty((prev) => Math.max(0, prev - 1));
  };

  const clearCart = () => {
    setCartQty(0);
  };

  const cartTotal = cartQty * product.price;

  useEffect(() => {
    const onMove = (event) => {
      const nx = event.clientX / window.innerWidth - 0.5;
      const ny = event.clientY / window.innerHeight - 0.5;
      setDrift({ x: nx * 6, y: ny * 4 });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="page-shell vicious">
      <div className="grimoire-layer" aria-hidden="true" style={{ transform: `translate3d(${drift.x}px, ${drift.y}px, 0)` }}>
        {grimoireLines.map((line) => (
          <span
            key={line.text}
            className="grimoire-line"
            style={{
              "--x": line.x,
              "--y": line.y,
              "--delay": line.d,
              "--time": line.t,
              "--rot": line.r,
              "--size": line.s,
            }}
          >
            {line.text}
          </span>
        ))}
      </div>

      <header className="top-nav">
        <div className="brand-wrap">
          <Image src="/logo_1_line_new.png" alt="Ofir Dror Music Production" width={320} height={52} className="nav-logo" priority />
        </div>
        <nav className="nav-actions" aria-label="Primary">
          <Link className="nav-image-btn" href="/login" aria-label="Login">
            <Image src="/login-button.png" alt="Login" width={160} height={44} className="nav-action-img" />
          </Link>
          <button
            className="nav-image-btn cart-btn"
            type="button"
            aria-label={`Shopping cart${cartQty ? ` (${cartQty} items)` : ""}`}
            onClick={() => setIsCartOpen((prev) => !prev)}
          >
            <Image src="/shopping-cart-button.png" alt="Shopping cart" width={160} height={44} className="nav-action-img" />
            {cartQty > 0 && <span className="cart-count-badge">{cartQty}</span>}
          </button>
        </nav>
      </header>

      {isCartOpen && (
        <>
          <button className="cart-overlay" type="button" aria-label="Close shopping cart" onClick={() => setIsCartOpen(false)} />
          <aside className="cart-drawer" role="dialog" aria-label="Shopping cart" aria-modal="true">
            <div className="cart-head">
              <h2>Shopping Cart</h2>
              <button className="cart-close" type="button" aria-label="Close cart" onClick={() => setIsCartOpen(false)}>
                Close
              </button>
            </div>

            {cartQty > 0 ? (
              <>
                <div className="cart-item">
                  <p className="cart-item-name">{product.name}</p>
                  <p className="cart-item-meta">${product.price} x {cartQty}</p>
                </div>
                <p className="cart-total">Total: ${cartTotal}</p>
                <div className="cart-actions">
                  <button className="cta secondary" type="button" onClick={addToCart}>+ Add One</button>
                  <button className="cta secondary" type="button" onClick={removeOneFromCart}>- Remove One</button>
                  <button className="cta primary" type="button" onClick={clearCart}>Clear Cart</button>
                </div>
              </>
            ) : (
              <p className="cart-empty">Your cart is empty. Hit any Buy button to add NecroTone.</p>
            )}
          </aside>
        </>
      )}

      <main className="main">
        <section className="hero-wrap service-hero">
          <div className="hero-copy">
            <p className="kicker">Ofir Dror Music Production</p>
            <h1 className="hero-title">NecroTone - Black Metal Distortion VST</h1>
            <p className="hero-subtitle">VST3 | Win / macOS</p>
            <p className="hero-text">Turn flat DI guitars into aggressive, mix-ready metal tone in seconds.</p>
          </div>

          <aside className="offer-card service-card">
            <p className="offer-kicker">What You Get</p>
            <h2 className="offer-title">Fast Tone, Brutal Impact</h2>
            <ul className="offer-list">
              <li>Dual-stage distortion for black/death tones</li>
              <li>Cab + EQ for mix-ready control</li>
              <li>Low-latency workflow for tracking</li>
            </ul>
            <button className="cta primary full" type="button" onClick={addToCart}>Buy for $39</button>
            <a className="cta secondary full" href="#audio-demos">Listen Before Buying</a>
          </aside>
        </section>

        <section className="plugin-block">
          <div className="section-head">
            <p>Plugin Interface</p>
            <h2>Built To Track Fast, Mix Brutal</h2>
          </div>
          <div className="plugin-shot-wrap">
            <Image src="/screenshot.jpg" alt="NecroTone plugin interface screenshot" width={1400} height={800} className="plugin-shot" priority />
          </div>
        </section>

        <section id="audio-demos" className="demo-block">
          <div className="section-head">
            <p>Audio Demos</p>
            <h2>Before / After Tone Examples</h2>
          </div>
          <div className="demo-categories">
            {audioExamples.map((item) => (
              <article className="demo-card" key={item.label}>
                <p className="preset-kicker">{item.label}</p>
                <div className="audio-pair">
                  <div>
                    <p className="audio-label">Before</p>
                    <audio controls preload="metadata" className="demo-audio" src={item.before} />
                  </div>
                  <div>
                    <p className="audio-label">After (NecroTone)</p>
                    <audio controls preload="metadata" className="demo-audio" src={item.after} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="features" className="feature-grid">
          <article className="feature-card">
            <h3>Ritual Preamp</h3>
            <p>Shape icy rasp or thick modern darkness with two harmonic gain stages.</p>
          </article>
          <article className="feature-card">
            <h3>Cab Forge</h3>
            <p>Move from chainsaw bite to atmospheric walls with fast cab controls.</p>
          </article>
          <article className="feature-card">
            <h3>Mix-Ready</h3>
            <p>Built-in post EQ and noise control for cleaner, heavier final mixes.</p>
          </article>
        </section>

        <section className="trust-section">
          <div className="section-head">
            <p>Trust</p>
            <h2>Used By Extreme Metal Producers</h2>
          </div>
          <div className="stat-strip">
            <article className="stat-item">
              <p className="stat-value">60+</p>
              <p className="stat-label">Black Metal Presets</p>
            </article>
            <article className="stat-item">
              <p className="stat-value">4</p>
              <p className="stat-label">Gain Voicings</p>
            </article>
            <article className="stat-item">
              <p className="stat-value">0</p>
              <p className="stat-label">Latency Drama</p>
            </article>
          </div>
          <div className="testimonials-grid">
            <article className="feature-card">
              <p>"NecroTone made our rhythm guitars sound release-ready in minutes."</p>
              <h3>Crypt Of Ruin</h3>
            </article>
            <article className="feature-card">
              <p>"Perfect for frozen tremolo lines and dark modern saturation."</p>
              <h3>Ashen Ritual</h3>
            </article>
            <article className="feature-card">
              <p>"Fast workflow. Huge tone. No extra plugin chain needed."</p>
              <h3>Vargan Hollow</h3>
            </article>
          </div></section>

        <section id="faq" className="contact-section">
          <div className="section-head">
            <p>FAQ</p>
            <h2>Quick Answers Before You Buy</h2>
          </div>
          <article className="feature-card contact-card">
            <p><strong>Formats:</strong> VST3</p>
            <p><strong>OS:</strong> Windows and macOS</p>
            <p><strong>Protection:</strong> No iLok required</p>
            <div className="section-cta">
              <button className="cta primary" type="button" onClick={addToCart}>Buy NecroTone</button>
              <a className="cta secondary" href="#audio-demos">Hear Demos</a>
            </div>
          </article>
        </section>

        <div className="audio-preload" aria-hidden="true">
          <audio preload="auto" src="/audio/demo-clean.wav" />
          <audio preload="auto" src="/audio/demo-necrotone.wav" />
        </div>
      </main>

      <footer className="site-footer" aria-label="Footer">
        <div className="footer-inner">
          <p className="footer-brand">Ofir Dror Music Production - 2026</p>
          <p className="footer-meta">Tel Aviv, Israel | contact@ofirdrormusicproduction.com</p>
          <nav className="footer-nav" aria-label="Footer links">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
          </nav>
          <div className="social-row" aria-label="Social media links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">IG</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">YT</a>
            <a href="https://soundcloud.com" target="_blank" rel="noreferrer">SC</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
