import React from 'react';
import Button from '../components/Button';
import StatCard from '../components/StatCard';

export default function Products() {
  return (
    <>
      {/* INNER PAGE HERO */}
      <section className="hero-section" style={{ minHeight: '60vh', paddingBottom: 'var(--space-6)' }}>
        <div className="container" style={{ zIndex: 2 }}>
          <span className="hero-eyebrow">[ SYSTEM_VALIDATION: NODE_01 ]</span>
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
              <img src="/assets/product_bike.png" alt="STIMULAI Node 01 - Structural wireframe composite chassis showing load vectors and sensor integration." style={{ width: '100%', borderRadius: 'var(--radius-sm)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'var(--space-4)' }}>
              <span className="system-code" style={{ alignSelf: 'flex-start' }}>SPECIFICATION_MATRIX_v1.0</span>
              <h2 style={{ fontSize: 'var(--font-size-2xl)' }}>STIMULAI NODE_01</h2>
              <p>
                Engineered to satisfy extreme stiffness-to-weight ratios while mapping dynamic force vectors and physiological inputs across high-stress environments.
              </p>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
                <li style={{ borderBottom: '1px solid var(--color-border-default)', paddingBottom: 'var(--space-2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-text-secondary)', fontWeight: 500, fontFamily: 'monospace', fontSize: 'var(--font-size-sm)' }}>[ CHASSIS_STRUCTURE ]</span>
                  <span style={{ color: 'var(--color-text-primary)', textAlign: 'right' }}>Carbon composite monocoque, optimized load paths</span>
                </li>
                <li style={{ borderBottom: '1px solid var(--color-border-default)', paddingBottom: 'var(--space-2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-text-secondary)', fontWeight: 500, fontFamily: 'monospace', fontSize: 'var(--font-size-sm)' }}>[ TELEMETRY_ARRAY ]</span>
                  <span style={{ color: 'var(--color-text-primary)', textAlign: 'right' }}>Embedded 16-axis load/velocity sensor fusion</span>
                </li>
                <li style={{ borderBottom: '1px solid var(--color-border-default)', paddingBottom: 'var(--space-2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-text-secondary)', fontWeight: 500, fontFamily: 'monospace', fontSize: 'var(--font-size-sm)' }}>[ GEOMETRY_MATRIX ]</span>
                  <span style={{ color: 'var(--color-text-primary)', textAlign: 'right' }}>Adaptive 14-dimension system calibrations</span>
                </li>
                <li style={{ borderBottom: '1px solid var(--color-border-default)', paddingBottom: 'var(--space-2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-text-secondary)', fontWeight: 500, fontFamily: 'monospace', fontSize: 'var(--font-size-sm)' }}>[ EFFICIENCY_INDEX ]</span>
                  <span style={{ color: 'var(--color-text-primary)', textAlign: 'right' }}>98.4% mechanical energy transmission</span>
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
            <StatCard target="12000" suffix="+" label="Engineering Hours / Unit" />
            <StatCard target="40000" suffix="+" label="Load Cycles Tested" />
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
