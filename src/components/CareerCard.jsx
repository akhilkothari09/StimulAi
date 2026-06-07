import React from 'react';
import Button from './Button';

export default function CareerCard({ title, department, meta, children, onApplyClick }) {
  return (
    <div className="career-card crosshair-card">
      <span className="career-dept">{department}</span>
      <h3 className="career-title">{title}</h3>
      <span className="career-meta">{meta}</span>
      <p className="career-desc">{children}</p>
      <Button variant="ghost" onClick={onApplyClick} style={{ alignSelf: 'flex-start', marginTop: 'auto' }}>
        Initialize Application
      </Button>
    </div>
  );
}
