import React from 'react';

export default function SectionHeader({ eyebrow, title, children, centered = false, className = '' }) {
  return (
    <div className={`section-header ${centered ? 'centered' : ''} ${className}`.trim()}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2>{title}</h2>}
      {children && <p>{children}</p>}
    </div>
  );
}
