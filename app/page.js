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
  { text: "TEMPESTAS CHORDAE", x: "10%", y: "14%", d: "1.1s", t: "12.9s", r: "0deg", s: "0.76rem" },
  { text: "ALTARE FREQUENTIAE", x: "79%", y: "28%", d: "2.2s", t: "11.5s", r: "0deg", s: "0.76rem" },
  { text: "NIGRA RESONANTIA", x: "11%", y: "50%", d: "3.4s", t: "10.8s", r: "0deg", s: "0.76rem" },
  { text: "CANTUS FERRUM", x: "80%", y: "71%", d: "4.6s", t: "12.2s", r: "0deg", s: "0.76rem" },
];

const presetCards = [
  {
    name: "Nordic Frost",
    useCase: "Razor tremolo lines with tight low-end and icy upper mids.",
    chain: "Gate 28% | Ritual Gain 63% | Cab North 4x12 | Presence +14",
  },
  {
    name: "Catacomb Wall",
    useCase: "Massive rhythm layers that stay dark without turning muddy.",
    chain: "Input Trim -2.5 dB | Gain B 71% | Cab Blend 62/38 | Low Cut 74 Hz",
  },
  {
    name: "Ritual Saw",
    useCase: "High-aggression lead texture for blast sections and transitions.",
    chain: "Saturation 77% | Harmonic Bite +18 | Noise Gate Fast | Post EQ 3.2 kHz",
  },
];

export default function HomePage() {
  const [presetIndex, setPresetIndex] = useState(0);
  const [abMode, setAbMode] = useState("A");
  const [drift, setDrift] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event) => {
      const nx = event.clientX / window.innerWidth - 0.5;
      const ny = event.clientY / window.innerHeight - 0.5;
      setDrift({ x: nx * 6, y: ny * 4 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const nextPreset = () => setPresetIndex((current) => (current + 1) % presetCards.length);
  const prevPreset = () => setPresetIndex((current) => (current - 1 + presetCards.length) % presetCards.length);

  const activePreset = presetCards[presetIndex];
  const activeDemo = abMode === "A" ? "/audio/demo-clean.wav" : "/audio/demo-necrotone.wav";

  return (
    <div className="page-shell vicious">
      <div
        className="grimoire-layer"
        aria-hidden="true"
        style={{ transform: `translate3d(${drift.x}px, ${drift.y}px, 0)` }}
      >
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
          <Image
            src="/logo_1_line_new.png"
            alt="Ofir Dror Music Production"
            width={320}
            height={52}
            className="nav-logo"
            priority
          />
        </div>
        <nav className="nav-actions" aria-label="Primary">
          <button className="nav-image-btn" type="button" aria-label="Login (coming soon)">
            <Image src="/login-button.png" alt="Login" width={160} height={44} className="nav-action-img" />
          </button>
          <button className="nav-image-btn cart-btn" type="button" aria-label="Shopping cart (coming soon)">
            <Image src="/shopping-cart-button.png" alt="Shopping cart" width={160} height={44} className="nav-action-img" />
          </button>
        </nav>
      </header>

      <main className="main">
        <section className="hero-wrap">
          <div className="hero-copy">
            <p className="kicker">Forged For Extreme Metal Production</p>
            <h1 className="hero-title">NecroTone</h1>
            <p className="hero-subtitle">A vicious black-metal distortion VST for razor tremolo lines, raw blast-beat rhythm guitars, and glacially aggressive saturation.</p>
            <div className="format-row" aria-label="Supported formats">
              <span>VST3</span>
              <span>AU</span>
              <span>AAX</span>
              <span>Win / macOS</span>
            </div>

            <div className="trust-row" aria-label="Trust highlights">
              <span>Instant Download</span>
              <span>Lifetime v1 Updates</span>
              <span>No iLok</span>
            </div>

            <div className="cta-row">
              <button className="cta primary" type="button">
                Buy NecroTone
              </button>
              <button className="cta secondary" type="button">
                Watch Demo
              </button>
            </div>
            <ul className="feature-list">
              <li>Dual-stage distortion tuned for grim and atmospheric tones</li>
              <li>Cab and EQ section for chainsaw bite or cavernous walls</li>
              <li>VST3 support for modern production workflows</li>
            </ul>
          </div>

          <aside className="offer-card">
            <p className="offer-kicker">Launch Offer</p>
            <h2 className="offer-title">Own NecroTone Outright</h2>
            <p className="offer-price">$39</p>
            <p className="offer-note">One-time payment. Lifetime updates for all v1 releases.</p>
            <button className="cta primary full" type="button">
              Get Instant Access
            </button>
            <button className="cta secondary full" type="button">
              Start Free Trial
            </button>
            <ul className="offer-list">
              <li>VST3 Supported</li>
              <li>No iLok required</li>
            </ul>
          </aside>
        </section>

        <section className="demo-block">
          <div className="section-head">
            <p>Audio Demo</p>
            <h2>A / B Test The Tone</h2>
          </div>

          <div className="demo-grid">
            <article className="demo-card">
              <div className="ab-toggle" role="tablist" aria-label="A/B demo selector">
                <button
                  type="button"
                  className={abMode === "A" ? "ab-btn active" : "ab-btn"}
                  onClick={() => setAbMode("A")}
                  aria-pressed={abMode === "A"}
                >
                  A - Clean DI
                </button>
                <button
                  type="button"
                  className={abMode === "B" ? "ab-btn active" : "ab-btn"}
                  onClick={() => setAbMode("B")}
                  aria-pressed={abMode === "B"}
                >
                  B - NecroTone
                </button>
              </div>
              <audio key={activeDemo} controls preload="metadata" className="demo-audio" src={activeDemo}>
                Your browser does not support audio playback.
              </audio>
              <p className="demo-note">Tip: Level-match your monitoring for a fair A/B decision.</p>
            </article>

            <article className="preset-card">
              <p className="preset-kicker">Preset Spotlight</p>
              <h3>{activePreset.name}</h3>
              <p>{activePreset.useCase}</p>
              <p className="preset-chain">{activePreset.chain}</p>
              <div className="preset-nav">
                <button type="button" className="cta secondary" onClick={prevPreset}>
                  Previous
                </button>
                <button type="button" className="cta primary" onClick={nextPreset}>
                  Next Preset
                </button>
              </div>
            </article>
          </div>
        </section>

        <section className="plugin-block">
          <div className="section-head">
            <p>Plugin Interface</p>
            <h2>Built To Track Fast, Mix Brutal</h2>
          </div>
          <div className="plugin-shot-wrap">
            <Image
              src="/screenshot.jpg"
              alt="NecroTone plugin interface screenshot"
              width={1400}
              height={800}
              className="plugin-shot"
              priority
            />
          </div>
        </section>

        <section className="stat-strip">
          <article className="stat-item">
            <p className="stat-value">60+</p>
            <p className="stat-label">Black metal presets</p>
          </article>
          <article className="stat-item">
            <p className="stat-value">4</p>
            <p className="stat-label">Gain voicings</p>
          </article>
          <article className="stat-item">
            <p className="stat-value">0</p>
            <p className="stat-label">Latency drama</p>
          </article>
        </section>

        <section className="feature-grid">
          <article className="feature-card">
            <h3>Ritual Preamp</h3>
            <p>Shape harsh Nordic rasp or thick modern darkness with two harmonic stages and tight low-end control.</p>
          </article>
          <article className="feature-card">
            <h3>Cab Forge</h3>
            <p>Switch between ice-pick aggression and broad atmospheric depth using quick cabinet and mic blending controls.</p>
          </article>
          <article className="feature-card">
            <h3>Mix-Ready</h3>
            <p>Built-in post EQ and noise control keep your riffs huge without fighting your drum bus or vocal space.</p>
          </article>
        </section>

        <section className="requirements-block">
          <div className="section-head">
            <p>System Requirements</p>
            <h2>Ready For Studio Work</h2>
          </div>
          <div className="requirements-grid">
            <article className="requirements-card">
              <h3>Windows</h3>
              <ul>
                <li>Windows 10 or newer</li>
                <li>Intel i5 / Ryzen 5 or better</li>
                <li>8 GB RAM minimum</li>
                <li>VST3 host required</li>
              </ul>
            </article>
            <article className="requirements-card">
              <h3>macOS</h3>
              <ul>
                <li>macOS 12 Monterey or newer</li>
                <li>Apple Silicon or Intel i5+</li>
                <li>8 GB RAM minimum</li>
                <li>AU / VST3 host support</li>
              </ul>
            </article>
          </div>
        </section>
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
