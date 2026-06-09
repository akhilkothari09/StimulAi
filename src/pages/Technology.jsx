import React from 'react';
import SectionHeader from '../components/SectionHeader';
import TechCard from '../components/TechCard';
import Button from '../components/Button';

export default function Technology() {
  return (
    <>
      {/* INNER PAGE HERO */}
      <section className="hero-section" style={{ minHeight: '60vh', paddingBottom: 'var(--space-6)' }}>
        <div className="container" style={{ zIndex: 2 }}>
          <h1 className="hero-headline" style={{ maxWidth: '25ch' }}>Four disciplines. One machine.</h1>
          <p className="hero-description" style={{ maxWidth: '60ch' }}>
            STIMULAI's technology platform is not a collection of features. It is a design methodology — a systematic approach to building machines that perform at the limit of physical possibility.
          </p>
        </div>
      </section>

      {/* PILLAR DETAIL SECTIONS */}
      <section style={{ backgroundColor: 'var(--color-surface-secondary)' }}>
        <div className="container">
          <div className="grid-2">

            <TechCard
              title="1 Embedded Intelligence"
              className="crosshair-card"
              icon={
                <svg className="tech-card-icon" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ width: '48px', height: '48px', marginBottom: 'var(--space-2)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.827c.292-.24.437-.613.43-.991a6.936 6.936 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              }
            >
              Intelligence is not added to our machines at the end of the engineering cycle. It is architected in from the first design brief. Sensor arrays, real-time data processing, and adaptive systems are structural — not optional. The machine knows what the athlete needs before they do.
            </TechCard>

            <TechCard
              title="2 Advanced Materials"
              className="crosshair-card"
              icon={
                <svg className="tech-card-icon" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ width: '48px', height: '48px', marginBottom: 'var(--space-2)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5V18a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18V7.5m18 0V5.25A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25V7.5m18 0-8.967 8.967a1.875 1.875 0 0 1-2.652 0L3 7.5" />
                </svg>
              }
            >
              We do not select materials from standard catalogues. We evaluate materials against performance requirements and select for capability, not convention. Carbon composite layups, precision metallic alloys, next-generation polymers — each chosen because it is the right material for the specific load case, not the easiest to manufacture.
            </TechCard>

            <TechCard
              title="3 Biomechanics Interface"
              className="crosshair-card"
              icon={
                <svg className="tech-card-icon" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ width: '48px', height: '48px', marginBottom: 'var(--space-2)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94-3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              }
            >
              The athlete is a biological machine. Our engineering begins with that machine — its load patterns, its power delivery curves, its fatigue response, its injury risk profile. We engineer the interface between human and machine at the system level, not the component level. The result is a machine that feels like an extension of the body, not a tool in the hand.
            </TechCard>

            <TechCard
              title="4 Systems Architecture"
              className="crosshair-card"
              icon={
                <svg className="tech-card-icon" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ width: '48px', height: '48px', marginBottom: 'var(--space-2)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                </svg>
              }
            >
              Every component in a STIMULAI machine is designed as part of a system. We do not optimize components individually and hope they cohere. We define system-level performance requirements first, then engineer components to satisfy them. Performance is not additive. It is multiplicative. The system is the product.
            </TechCard>

          </div>
        </div>
      </section>

      {/* INNER CTA SECTION */}
      <section className="reveal">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-3)' }}>Validating the Platform</h2>
          <p style={{ margin: '0 auto var(--space-5) auto' }}>
            The technology platform is category-agnostic. The first physical implementation has been engineered for elite cycling performance.
          </p>
          <div className="hero-ctas" style={{ justifyContent: 'center', gap: 'var(--space-4)' }}>
            <Button to="/products" variant="primary">Specifications Brief</Button>
            <Button to="/contact" variant="secondary">Initialize Session</Button>
          </div>
        </div>
      </section>
    </>
  );
}
