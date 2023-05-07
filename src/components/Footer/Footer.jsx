import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#CCD9CF] w-[100vw] text-center px-6 py-12 mt-14">
      <div className="font-semibold mb-4">
        SFPOPOS | All Rights Reserved | Terms Of Service | Privacy
      </div>
      <div>{`Copyright ${year}`}</div>
    </div>
  );
}
