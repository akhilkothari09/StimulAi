import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ children, variant = 'primary', className = '', to, href, ...props }) {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const combinedClass = `${baseClass} ${variantClass} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={combinedClass} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
}
