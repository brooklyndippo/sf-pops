import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

import Title from '../Title/Title';

export default function App() {
  return (
    <div>
      <div className="max-w-[1000px] m-auto">
        <Title />
        <div id="page-content" className="px-6 z-10 min-h-[100vh]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
