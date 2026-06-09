import React from 'react';
import Button from '../components/Button';

export default function Philosophy() {
  return (
    <>
      {/* INNER PAGE HERO */}
      <section className="hero-section" style={{ minHeight: '60vh', paddingBottom: 'var(--space-6)' }}>
        <div className="container" style={{ zIndex: 2 }}>
          <h1 className="hero-headline" style={{ maxWidth: '25ch' }}>ENGINEERING HUMAN POTENTIAL.</h1>
          <p className="hero-description" style={{ maxWidth: '60ch' }}>
            We do not iterate on standard industry paradigms. We formulate performance requirements from baseline physics and engineer systems from the ground up.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY DEEP-DIVE SECTIONS */}
      <section style={{ backgroundColor: 'var(--color-surface-secondary)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>

          {/* Section 1: First Principles */}
          <div className="reveal crosshair-card philosophy-row">
            <div>
              <h2 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)' }}>First Principles</h2>
            </div>
            <p style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              Most engineering begins with precedent. An existing solution is taken as the starting point, and improvement is applied at the margins. We begin somewhere different. We begin with the physics. We ask: what does this system need to do? Then we engineer the system that does it — without inheriting the assumptions of whoever solved this problem before us.
            </p>
          </div>

          {/* Section 2: The Athlete as System */}
          <div className="reveal crosshair-card philosophy-row">
            <div>
              <h2 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)' }}>Biomechanical Interface</h2>
            </div>
            <p style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              We are biomechanics engineers as much as mechanical engineers. The human body is a complex, adaptive, high-performance system — and our job is to build a machine that interfaces with it at the highest possible fidelity. That means understanding power delivery, fatigue mechanics, neuromuscular patterns, and psychological performance states. The machine is not designed for the average athlete. It is designed to be calibrated to any athlete.
            </p>
          </div>

          {/* Section 3: Obsessive Precision */}
          <div className="reveal crosshair-card philosophy-row">
            <div>
              <h2 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)' }}>System Integrity</h2>
            </div>
            <p style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              Precision is not a feature we add. It is a cultural requirement. Every tolerance is justified. Every material choice is documented. Every design decision is challenged until it is the right decision, not the easiest one. We have sent engineering teams back to rebuild complete subassemblies because they were good — and we knew they could be right. The difference matters.
            </p>
          </div>

          {/* Section 4: The Methodology Scales */}
          <div className="reveal crosshair-card philosophy-row">
            <div>
              <h2 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)' }}>Platform Scalability</h2>
            </div>
            <p style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              The validation vehicle is the proof of concept. The engineering platform — first principles design, biomechanics interface, advanced materials integration, embedded intelligence — is not specific to any product or sport. It is a methodology for building high-performance human-machine systems. Every sport, every discipline, every context where human capability meets mechanical possibility is within scope.
            </p>
          </div>

        </div>
      </section>

      {/* INNER CTA SECTION */}
      <section className="reveal">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-3)' }}>Initialize R&D Collaboration</h2>
          <p style={{ margin: '0 auto var(--space-5) auto', maxWidth: '60ch' }}>
            We search for mechanical engineers, control systems developers, and biomechanics researchers who refuse to accept incremental defaults.
          </p>
          <div className="hero-ctas" style={{ justifyContent: 'center', gap: 'var(--space-4)' }}>
            <Button to="/careers" variant="primary">Join The Team</Button>
            <Button to="/contact" variant="ghost">Initialize Session</Button>
          </div>
        </div>
      </section>
    </>
  );
}
