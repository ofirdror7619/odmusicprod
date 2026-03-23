import Image from "next/image";

export default function HomePage() {
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

  return (
    <div className="page-shell vicious">
      <div className="grimoire-layer" aria-hidden="true">
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
      </main>

      <footer className="site-footer" aria-label="Footer">
        <div className="footer-inner">
          <p className="footer-brand">Ofir Dror Music Production - 2026</p>
          <p className="footer-meta">Tel Aviv, Israel</p>
          <nav className="footer-nav" aria-label="Footer links">
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">FAQ</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

