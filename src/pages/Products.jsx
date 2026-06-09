import React from 'react';
import Button from '../components/Button';
import StatCard from '../components/StatCard';

export default function Products() {
  return (
    <>
      {/* INNER PAGE HERO */}
      <section className="hero-section" style={{ minHeight: '60vh', paddingBottom: 'var(--space-6)' }}>
        <div className="container" style={{ zIndex: 2 }}>
          <h1 className="hero-headline" style={{ maxWidth: '25ch' }}>INTEGRATED PERFORMANCE CHASSIS.</h1>
          <p className="hero-description" style={{ maxWidth: '60ch' }}>
            This is not a commercial product. Validation vehicle Node 01 is an integrated hardware-software chassis engineered to validate structural load-path models and high-frequency telemetry loops.
          </p>
        </div>
      </section>

      {/* PRODUCT DISPLAY */}
      <section style={{ backgroundColor: 'var(--color-surface-secondary)' }}>
        <div className="container">
          <div className="grid-2">
            <div className="crosshair-card" style={{ border: '1px solid var(--color-border-default)', padding: 'var(--space-2)' }}>
              <img src="/assets/product_bike.png" alt="STIMULAI Node 1 - Structural wireframe composite chassis showing load vectors and sensor integration." style={{ width: '100%', borderRadius: 'var(--radius-sm)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'var(--space-4)' }}>
              <h2 style={{ fontSize: 'var(--font-size-2xl)' }}>STIMULAI NODE_1</h2>
              <p>
                Engineered to satisfy extreme stiffness-to-weight ratios while mapping dynamic force vectors and physiological inputs across high-stress environments.
              </p>

              <ul className="spec-list">
                <li className="spec-item">
                  <span className="spec-label"> CHASSIS_STRUCTURE </span>
                  <span className="spec-value">Carbon composite monocoque, optimized load paths</span>
                </li>
                <li className="spec-item">
                  <span className="spec-label"> TELEMETRY_ARRAY </span>
                  <span className="spec-value">Embedded 16-axis load/velocity sensor fusion</span>
                </li>
                <li className="spec-item">
                  <span className="spec-label"> GEOMETRY_MATRIX </span>
                  <span className="spec-value">Adaptive 14-dimension system calibrations</span>
                </li>
                <li className="spec-item">
                  <span className="spec-label"> EFFICIENCY_INDEX </span>
                  <span className="spec-value">98.4% mechanical energy transmission</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS WRAPPER */}
      <section className="performance-metrics-section reveal">
        <div className="container">
          <div className="metrics-row">
            <StatCard target="12000" label="Engineering Hours / Unit" />
            <StatCard target="40000" label="Load Cycles Tested" />
            <StatCard target="680" suffix="g" label="Core Chassis Mass" />
          </div>
        </div>
      </section>

      {/* CALL TO ENQUIRY */}
      <section className="reveal">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-3)' }}>Initialize Integration</h2>
          <p style={{ margin: '0 auto var(--space-5) auto', maxWidth: '60ch' }}>
            We do not mass manufacture. Every chassis is custom-commissioned and calibrated to individual telemetry logs. Contact our R&D team to schedule a configuration session.
          </p>
          <div className="hero-ctas" style={{ justifyContent: 'center', gap: 'var(--space-4)' }}>
            <Button to="/contact?type=athlete" variant="primary">Initialize Session</Button>
            <Button to="/technology" variant="ghost">Analyze Architecture</Button>
          </div>
        </div>
      </section>
    </>
  );
}
