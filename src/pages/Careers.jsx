import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import CareerCard from '../components/CareerCard';

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleApplyClick = (roleKey) => {
    setSelectedRole(roleKey);
    const formSection = document.getElementById('apply');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      <section className="hero-section" style={{ minHeight: '60vh', paddingBottom: 'var(--space-6)' }}>
        <div className="container" style={{ zIndex: 2 }}>
          <span className="hero-eyebrow">[ CAREERS_PORTAL: R&D_INTEGRATION ]</span>
          <h1 className="hero-headline" style={{ maxWidth: '25ch' }}>THE FUTURE OF HUMAN PERFORMANCE ENGINEERING.</h1>
          <p className="hero-description" style={{ maxWidth: '60ch' }}>
            STIMULAI is an engineering company solving complex physical and computational challenges at the human-machine boundary. We seek engineers, materials scientists, and software developers who refuse to accept incremental defaults.
          </p>
        </div>
      </section>

      {/* CULTURE VALUES */}
      <section style={{ backgroundColor: 'var(--color-surface-secondary)' }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="system-code">[ CAPABILITY_METRIC ]</span>
              <h2 style={{ fontSize: 'var(--font-size-2xl)', marginTop: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>We hire for capability, not conventions.</h2>
              <p>
                The best engineers we've ever met are the ones who are still not satisfied with their last answer. If you recognize yourself in that description, we want to hear from you — regardless of where you've worked before or what your credentials say.
              </p>
            </div>
            <div>
              <span className="system-code">[ ENVIRONMENT_LOG ]</span>
              <h2 style={{ fontSize: 'var(--font-size-2xl)', marginTop: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>Obsession is a core attribute.</h2>
              <p>
                We believe that the intersection of physiology and structural engineering is one of the most intellectually rich environments to build in. We take systems performance seriously — our own as much as our machines'. We decide clearly and build without compromise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN ROLES LIST */}
      <section className="reveal">
        <div className="container">
          <SectionHeader eyebrow="[ R&D_VACANCIES ]" title="Open Engineering Systems Roles" centered />
          
          <div className="grid-2" style={{ marginTop: 'var(--space-6)' }}>
            <CareerCard 
              title="Senior Materials Scientist / Engineer"
              department="[ DEPT_MAT_SCI ]"
              meta="Hybrid · Full Time"
              onApplyClick={() => handleApplyClick('materials')}
            >
              Develop custom carbon composite layup schedules, optimize structural load-path profiles, and select metallic alloys for high-stress aerospace and chassis tolerances.
            </CareerCard>

            <CareerCard 
              title="Low-Latency Control Systems Engineer"
              department="[ DEPT_EMB_SYS ]"
              meta="On-site (R&D) · Full Time"
              onApplyClick={() => handleApplyClick('embedded')}
            >
              Write highly optimized, low-latency firmware for multi-axis sensor fusion, hardware communications protocols, and real-time algorithmic telemetry loops.
            </CareerCard>

            <CareerCard 
              title="Human-Machine Systems Analyst"
              department="[ DEPT_BIOMECH ]"
              meta="Hybrid · Full Time"
              onApplyClick={() => handleApplyClick('biomechanics')}
            >
              Model biological force delivery profiles, coordinate dynamic load transfer interfaces, and calibrate adaptive biomechanical tolerances to map athlete systems.
            </CareerCard>

            <CareerCard 
              title="Lead Systems Architect"
              department="[ DEPT_SYS_ENG ]"
              meta="Hybrid · Full Time"
              onApplyClick={() => handleApplyClick('systems')}
            >
              Ensure overall machine and platform integrity. Drive structural dynamics architectures linking hardware arrays, composite boundaries, and R&D pipelines.
            </CareerCard>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" className="reveal" style={{ backgroundColor: 'var(--color-surface-secondary)' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <SectionHeader eyebrow="[ SUBMISSION_PORTAL ]" title="Initialize Candidacy" centered>
            Submit your telemetry parameters and outline the engineering problems you have solved.
          </SectionHeader>

          {formSubmitted ? (
            <div className="form-success-panel" style={{ border: '1px solid var(--color-tech-blue)', padding: 'var(--space-5)', borderRadius: 'var(--radius-sm)' }}>
              <h3 style={{ color: 'var(--color-tech-blue)', fontFamily: 'monospace' }}>[ PIPELINE_ACTIVATED ]</h3>
              <p style={{ marginTop: 'var(--space-2)' }}>Your application parameter set has been recorded. Our engineering leads will evaluate your submission.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" id="name" name="name" className="form-input" required placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" id="email" name="email" className="form-input" required placeholder="name@domain.com" />
              </div>
              <div className="form-group">
                <label htmlFor="role" className="form-label">Target R&D Division</label>
                <select 
                  id="role" 
                  name="role" 
                  className="form-select" 
                  required 
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  <option value="">Select a division...</option>
                  <option value="materials">[DEPT_MAT_SCI] Senior Materials Scientist / Engineer</option>
                  <option value="embedded">[DEPT_EMB_SYS] Low-Latency Control Systems Engineer</option>
                  <option value="biomechanics">[DEPT_BIOMECH] Human-Machine Systems Analyst</option>
                  <option value="systems">[DEPT_SYS_ENG] Lead Systems Architect</option>
                  <option value="speculative">Speculative R&D Integration</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="linkedin" className="form-label">Technical Profile URL (GitHub / GitLab / ResearchGate)</label>
                <input type="url" id="linkedin" name="linkedin" className="form-input" placeholder="https://github.com/username" />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Detail a complex physics or engineering problem you solved</label>
                <textarea id="message" name="message" className="form-textarea" required placeholder="Outline target load-case analysis, structural calculations, firmware algorithms, or physical hardware solutions. Keep it technical."></textarea>
              </div>
              <div style={{ marginTop: 'var(--space-5)', textAlign: 'center' }}>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isSubmitting}>
                  {isSubmitting ? 'Transmitting Data...' : 'Initialize Candidacy'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
