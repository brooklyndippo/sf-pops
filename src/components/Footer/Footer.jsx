import React from 'react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="Footer">
      Copyright
      {' '}
      {year}
      {' '}
      SFPOPOS | All Rights Reserved | Terms Of Service | Privacy
    </div>
  );
}
