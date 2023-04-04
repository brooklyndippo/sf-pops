import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

import Title from '../Title/Title';

export default function App() {
  return (
    <div>
      <Title />
      <div id="page-content" className="px-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
