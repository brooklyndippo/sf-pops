/* eslint-disable react/jsx-no-bind */
// src/Title.js
import React, { useState } from 'react';
import './Title.css';
import '../../index.css';
import { NavLink } from 'react-router-dom';

export default function Title() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function handleClick() {
    setShowMobileMenu(!showMobileMenu);
  }

  return (
    <div className="h-12 px-6 py-2 my-2 flex flex-row justify-between">
      {/* hamburger menu button */}
      <button id="hamburger-menu" type="button" onClick={handleClick} className="md:hidden">
        {showMobileMenu ? (
          <div id="close" className="min-h-[18px] grid place-items-center relative">
            <span className="w-6 h-[3px] bg-black rounded rotate-45 absolute bottom-0 left-0" />
            <span className="w-6 h-[3px] bg-black rounded -rotate-45 absolute bottom-0 left-0" />
          </div>
        ) : (
          <div id="open" className="h-[18px] flex flex-col justify-between">
            <span className="w-6 h-[3px] bg-black rounded" />
            <span className="w-6 h-[3px] bg-black rounded" />
            <span className="w-6 h-[3px] bg-black rounded" />
          </div>
        )}
      </button>
      <div
        id="logo"
        className="hidden md:flex items-center text-lg font-bold min-w-fit px-2 text-white bg-gray-400 rounded-lg"
      >
        SF POPOS
      </div>
      {/* desktop nav */}
      <div
        id="desktop-nav"
        className="hidden md:flex flex-row justify-end gap-10 w-full font-semibold text-black text-lg"
      >
        <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')} to="/">
          Spaces
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
          to="/about"
        >
          Subscribe
        </NavLink>
      </div>
      {/* mobile nav */}
      {showMobileMenu && (
        <div
          id="mobile-menu"
          className="flex flex-col gap-10 lg:hidden bg-black/[.9] text-white absolute w-full h-[80%] z-10 pl-8 py-10 top-16 left-0 font-semibold text-lg"
        >
          <NavLink
            onClick={handleClick}
            className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
            to="/"
          >
            Spaces
          </NavLink>
          <NavLink
            onClick={handleClick}
            className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={handleClick}
            className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
            to="/about"
          >
            Subscribe
          </NavLink>
        </div>
      )}
    </div>
  );
}
