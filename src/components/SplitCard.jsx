import React from 'react';
import Button from './Button';

export default function SplitCard({ title, children, to, btnText }) {
  return (
    <div className="split-card">
      <h3 className="split-card-title">{title}</h3>
      <p className="split-card-desc">{children}</p>
      {to && <Button variant="secondary" to={to} style={{ marginTop: 'auto' }}>{btnText}</Button>}
    </div>
  );
}
