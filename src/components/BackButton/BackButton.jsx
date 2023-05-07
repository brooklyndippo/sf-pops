import React from 'react';

export default function BackButton() {
  return (
    <a href="/">
      <span className="bg-[#303030] hover:bg-black p-2 px-6 flex items-center text-white justify-center font-bold rounded md:w-fit md:m-auto">
        Back to all spaces
      </span>
    </a>
  );
}
