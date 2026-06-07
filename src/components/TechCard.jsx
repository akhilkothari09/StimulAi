import React from 'react';

export default function TechCard({ title, icon, children, className = '' }) {
  return (
    <div className={`tech-card ${className}`.trim()}>
      {icon && <div className="tech-card-icon">{icon}</div>}
      <h3 className="tech-card-title">{title}</h3>
      <p className="tech-card-desc">{children}</p>
    </div>
  );
}
