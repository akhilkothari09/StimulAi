import React from 'react';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import TechCard from '../components/TechCard';
import StatCard from '../components/StatCard';
import SplitCard from '../components/SplitCard';

export default function Home() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1 className="hero-headline">INTELLIGENCE BUILT INTO MOTION.</h1>
            <p className="hero-description">
              We engineer human-machine performance loops. By integrating high-frequency sensor arrays and adaptive structures directly into composite architectures, we close the distance between physiological potential and mechanical execution.
            </p>
            <div className="hero-ctas">
              <Button to="/technology" variant="primary">Analyze Architecture</Button>
              <Button to="/products" variant="ghost">Specifications Brief</Button>
            </div>
          </div>
          <div className="hero-visual-container">
            <img src="/assets/hero_engineering.png" alt="Technical system schematic diagram overlaying an advanced structural frame with tech blue coordinate points." className="hero-visual" />
          </div>
        </div>
      </section>

      {/* SECTION 2: MISSION */}
      <section className="mission-section reveal">
        <div className="container">
          <div className="mission-content">
            <div className="mission-line"></div>
            <h2 className="mission-text">
              "We build machines that don't respond to athletes. They extend them."
            </h2>
            <p className="mission-subtext">
              STIMULAI is a human-performance systems developer. The bicycle is our primary load validation node — proof that the combination of high-density telemetry, biomechanical mapping, and adaptive materials delivers a closed-loop human-machine interface.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: ENGINEERING PHILOSOPHY TEASER */}
      <section className="philosophy-teaser-section reveal">
        <div className="container philosophy-teaser-grid">
          <div className="philosophy-intro">
            <SectionHeader title="We don't optimize. We re-engineer.">
              Physics doesn't negotiate. Neither do we.
            </SectionHeader>
            <p style={{ marginBottom: 'var(--space-5)' }}>
              We question the physics, re-examine the industry assumptions, and build from first principles. Every decision is engineered, not designed by committee.
            </p>
            <Button to="/philosophy" variant="secondary">Analyze Principles →</Button>
          </div>
          <div className="philosophy-cards-stack">
            <div className="philosophy-card crosshair-card">
              <h3 className="philosophy-card-title">1 First Principles</h3>
              <p className="philosophy-card-desc">
                We begin where others stop questioning. Every component, every material, every interface is treated as an unsolved problem until we prove otherwise.
              </p>
            </div>
            <div className="philosophy-card crosshair-card">
              <h3 className="philosophy-card-title">2 Systems Thinking</h3>
              <p className="philosophy-card-desc">
                Performance is not the sum of parts. It is the quality of their relationships. We engineer at the system level, not the component level.
              </p>
            </div>
            <div className="philosophy-card crosshair-card">
              <h3 className="philosophy-card-title">3 Obsessive Precision</h3>
              <p className="philosophy-card-desc">
                The difference between good engineering and great engineering is the question you ask after you think you're done. We ask it again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TECHNOLOGY PILLARS */}
      <section className="technology-pillars-section reveal">
        <div className="container">
          <SectionHeader title="Four disciplines. One machine." centered>
            STIMULAI's engineering platform is a systematic approach to building machines that perform at the limit of physical possibility.
          </SectionHeader>

          <div className="grid-4">
            <TechCard
              title="Embedded Intelligence"
              className="crosshair-card"
              icon={
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.827c.292-.24.437-.613.43-.991a6.936 6.936 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              }
            >
              Sensors, processing algorithms, and adaptive modules integrated directly into structural frames.
            </TechCard>

            <TechCard
              title="Advanced Materials"
              className="crosshair-card"
              icon={
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5V18a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18V7.5m18 0V5.25A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25V7.5m18 0-8.967 8.967a1.875 1.875 0 0 1-2.652 0L3 7.5" />
                </svg>
              }
            >
              Carbon composite layups, customized metallic alloys, and responsive polymers optimized for structural load path analysis.
            </TechCard>

            <TechCard
              title="Biomechanics Interface"
              className="crosshair-card"
              icon={
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94-3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              }
            >
              Real-time calibration of the athlete-machine boundary mapping neuromuscular signals and force limits.</TechCard>

            <TechCard
              title="Systems Architecture"
              className="crosshair-card"
              icon={
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                </svg>
              }
            >
              Synergistic loop validation ensuring all component layers function as an integrated structural system.         </TechCard>
          </div>
        </div>
      </section>

      {/* SECTION 5: PRODUCT SHOWCASE */}
      <section className="product-showcase-section reveal">
        <div className="container showcase-container">
          <SectionHeader title="Where the platform meets the athlete." centered>
            This is the first physical validation of the STIMULAI platform — a composite structural system integrating telemetry and logic controls.
          </SectionHeader>

          <div className="showcase-visual-wrapper">
            <img src="/assets/product_bike.png" alt="STIMULAI Node 01 - Structural composite frame detailing load vectors and sensor integrations." className="showcase-image" />

            <div className="annotation annotation-frame">
              <div className="annotation-dot" aria-describedby="desc-frame"></div>
              <div className="annotation-line"></div>
              <div className="annotation-card" id="desc-frame">
                <div className="annotation-title">Frame Geometry</div>
                <div className="annotation-desc">Aerodynamic monocoque structure optimized for directional loading vectors.</div>
              </div>
            </div>

            <div className="annotation annotation-sensor">
              <div className="annotation-dot" aria-describedby="desc-sensor"></div>
              <div className="annotation-line"></div>
              <div className="annotation-card" id="desc-sensor">
                <div className="annotation-title">16-Axis Sensor Fusion</div>
                <div className="annotation-desc">Multi-channel arrays trace frame load distribution and angular velocity streams.</div>
              </div>
            </div>

            <div className="annotation annotation-power">
              <div className="annotation-dot" aria-describedby="desc-power"></div>
              <div className="annotation-line"></div>
              <div className="annotation-card" id="desc-power">
                <div className="annotation-title">Torque Transfer</div>
                <div className="annotation-desc">Integrated stiffness differentials yield a validated 98.4% power transfer.</div>
              </div>
            </div>
          </div>

          <div className="showcase-annotations-mobile">
            <div className="philosophy-card">
              <h3 className="philosophy-card-title">Composite Frame</h3>
              <p className="philosophy-card-desc">Aerodynamic monocoque structure optimized for directional loading vectors.</p>
            </div>
            <div className="philosophy-card">
              <h3 className="philosophy-card-title">Sensor Fusion</h3>
              <p className="philosophy-card-desc">Multi-channel arrays trace frame load distribution and angular velocity streams.</p>
            </div>
            <div className="philosophy-card">
              <h3 className="philosophy-card-title">Torque Transfer</h3>
              <p className="philosophy-card-desc">Integrated stiffness differentials yield a validated 98.4% power transfer.</p>
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-6)' }}>
            <Button to="/products" variant="primary">Specifications Brief</Button>
          </div>
        </div>
      </section>

      {/* SECTION 6: PERFORMANCE METRICS */}
      <section className="performance-metrics-section reveal">
        <div className="container">
          <div className="metrics-row">
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <div className="metrics-cards-container">
                <StatCard target="680" suffix="g" label="Frame Weight" />
                <StatCard target="98.4" suffix=":1" label="Stiffness-to-Weight" isFloat />
                <StatCard target="16" suffix="-axis" label="Sensor Integration" />
                <StatCard target="40000" label="Load Cycle Tests" />
              </div>
              <div className="sparkline-placeholder">
                <svg width="100%" height="20" viewBox="0 0 1000 20" preserveAspectRatio="none" style={{ opacity: 0.6 }}>
                  <path d="M0 10 Q 150 18, 300 5 T 600 15 T 900 2 L 1000 12" fill="none" stroke="var(--color-tech-blue)" strokeWidth="1.5" />
                  <circle cx="300" cy="5" r="3" fill="var(--color-tech-blue)" />
                  <circle cx="600" cy="15" r="3" fill="var(--color-brand-primary)" />
                  <circle cx="900" cy="2" r="3" fill="var(--color-tech-blue)" />
                </svg>
              </div>
            </div>
          </div>
          <p className="metric-qualifier">
            Every statistic is an engineering specification, not a marketing claim. Independently verified.
          </p>
        </div>
      </section>

      {/* SECTION 7: INNOVATION */}
      <section className="innovation-section reveal">
        <div className="container">
          <SectionHeader title="The bicycle is proof. The platform is the point.">
            STIMULAI's engineering platform is product-agnostic and scales across every boundary where human capacity meets mechanical possibility.
          </SectionHeader>
          <div className="concept-grid">
            <div className="concept-card crosshair-card">
              <span className="concept-label">ROAD COMPLETION</span>
              <p className="concept-desc">Where the road ends, the materials engineering and adaptive stiffness integration continues.</p>
            </div>
            <div className="concept-card crosshair-card">
              <span className="concept-label">AEROSPACE COOP</span>
              <p className="concept-desc">Different sport. Same obsession. Re-engineering interfaces for aerospace tolerances.</p>
            </div>
            <div className="concept-card crosshair-card">
              <span className="concept-label">ML CALIBRATION</span>
              <p className="concept-desc">Aggregated metrics are feeding adaptive machine intelligence that calibrates in motion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CAREERS CTA */}
      <section className="careers-cta-section reveal">
        <div className="container">
          <div className="split-grid">
            <div className="philosophy-intro">
              <SectionHeader eyebrow="CAREERS" title="Calibrating talent. R&D vacancies open." />
              <p style={{ marginBottom: 'var(--space-5)' }}>
                We are looking for mechanical engineers, materials scientists, and embedded software developers who refuse to accept incremental progress and default methods.
              </p>
              <Button to="/careers" variant="primary">Join The Team</Button>
            </div>
            <div className="philosophy-intro" style={{ backgroundColor: 'var(--color-surface-secondary)', padding: 'var(--space-6)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-default)', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <span style={{ fontSize: 'var(--font-size-5xl)', fontWeight: 700, color: 'var(--color-brand-primary)' }}>04</span>
              <span className="footer-nav-title" style={{ marginTop: 'var(--space-2)' }}>Engineering Roles Open</span>
              <p style={{ fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-3)' }}>Calibrating talent in structural analysis, hardware programming, and elite biomechanics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CONTACT CTA */}
      <section className="contact-cta-section reveal">
        <div className="container">
          <SectionHeader title="The right conversation changes everything." centered />
          <div className="split-grid">
            <SplitCard title="For Athletes" to="/contact?type=athlete" btnText="Enquire About Products">
              Looking for a custom machine calibrated to your exact biomechanics profile and load limits? Let's discuss performance goals.
            </SplitCard>
            <SplitCard title="For Partners & Investors" to="/contact?type=partnership" btnText="Contact Our Team">
              Interested in first-mover applications in embedded intelligent hardware or advanced polymer/metal composites? Contact our corporate team.
            </SplitCard>
          </div>
        </div>
      </section>
    </>
  );
}
