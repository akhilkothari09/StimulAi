import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [enquiryType, setEnquiryType] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const typeParam = searchParams.get('type');
    if (typeParam) {
      setEnquiryType(typeParam);
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1500);
  };

  return (
    <>
      {/* INNER PAGE HERO */}
      <section className="hero-section" style={{ minHeight: '50vh', paddingBottom: 'var(--space-6)' }}>
        <div className="container" style={{ zIndex: 2 }}>
          <span className="hero-eyebrow">[ CONNECT_PORTAL: COMMUNICATIONS ]</span>
          <h1 className="hero-headline" style={{ maxWidth: '25ch' }}>INITIALIZE INTEGRATION.</h1>
          <p className="hero-description" style={{ maxWidth: '60ch' }}>
            We do not distribute systems off-the-shelf. Every deployment begins with a data-driven alignment session — reviewing telemetry parameters, mechanical specs, or strategic partnership bounds.
          </p>
        </div>
      </section>

      {/* FORM AND INFO CONTAINER */}
      <section style={{ backgroundColor: 'var(--color-surface-secondary)' }}>
        <div className="container">
          <div className="grid-12">
            
            {/* Contact Options info column */}
            <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              <div>
                <span className="system-code" style={{ marginBottom: 'var(--space-2)', display: 'inline-block' }}>[ SYSTEM_COMMISSIONING ]</span>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                  Are you looking for a structural chassis calibrated specifically to your biomechanical profile and operational load limits? Let's discuss performance targets.
                </p>
              </div>
              
              <div>
                <span className="system-code" style={{ marginBottom: 'var(--space-2)', display: 'inline-block' }}>[ STRATEGIC_ALLIANCE ]</span>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                  Interested in licensing our low-latency sensor fusion arrays, collaborating on carbon composite layups, or executing equity partnerships? Specify your framework.
                </p>
              </div>

              <div>
                <span className="system-code" style={{ marginBottom: 'var(--space-2)', display: 'inline-block' }}>[ COORDINATE_LOCUS ]</span>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-primary)', fontFamily: 'monospace', lineHeight: '1.7' }}>
                  STIMULAI ADVANCED TECHNOLOGIES R&D LABS<br />
                  Industrial Ring Sector 4<br />
                  Advanced Manufacturing Zone
                </p>
              </div>
            </div>

            {/* Contact Form column */}
            <div style={{ gridColumn: 'span 8' }}>
              <div className="philosophy-card crosshair-card" style={{ padding: 'var(--space-6)', borderLeft: 'none', borderTop: '3px solid var(--color-brand-primary)' }}>
                <h2 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-4)' }}>Establish communication and detail your system parameters.</h2>
                
                {formSubmitted ? (
                  <div className="form-success-panel" style={{ border: '1px solid var(--color-tech-blue)', padding: 'var(--space-5)', borderRadius: 'var(--radius-sm)' }}>
                    <h3 style={{ color: 'var(--color-tech-blue)', fontFamily: 'monospace' }}>[ TRANSMISSION_COMPLETE ]</h3>
                    <p style={{ marginTop: 'var(--space-2)' }}>We have established connection. A systems coordinator will review your telemetry criteria and contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Name / Representative</label>
                      <input type="text" id="name" name="name" className="form-input" required placeholder="Enter full name or entity" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Communications Address (Email)</label>
                      <input type="email" id="email" name="email" className="form-input" required placeholder="name@domain.com" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="enquiry-type" className="form-label">Transmission Protocol</label>
                      <select 
                        id="enquiry-type" 
                        name="enquiry-type" 
                        className="form-select" 
                        required
                        value={enquiryType}
                        onChange={(e) => setEnquiryType(e.target.value)}
                      >
                        <option value="">Select Protocol...</option>
                        <option value="athlete">Node 01 System Commissioning</option>
                        <option value="partnership">Strategic Engineering Alliance</option>
                        <option value="investment">R&D Equity Inquiry</option>
                        <option value="press">Communications / Media Interface</option>
                        <option value="other">Other Telemetry Transmission</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">Operational Request / Technical Scope</label>
                      <textarea id="message" name="message" className="form-textarea" required placeholder="Outline target load parameters, mechanical integration requirements, or research criteria..."></textarea>
                    </div>
                    <div style={{ marginTop: 'var(--space-5)' }}>
                      <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isSubmitting}>
                        {isSubmitting ? 'Transmitting...' : 'Initialize Session'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
