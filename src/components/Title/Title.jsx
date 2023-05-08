/* eslint-disable react/jsx-no-bind */
// src/Title.js
import React, { useState } from 'react';
import './Title.css';
import { NavLink } from 'react-router-dom';
import '../../index.css';

export default function Title() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSubscribe, setShowSubscribe] = useState(false);

  function handleClick() {
    setShowMobileMenu(!showMobileMenu);
  }

  function handleSubscribeClick() {
    setShowSubscribe(!showSubscribe);
  }

  return (
    <div className="h-12 px-6 py-2 my-2 flex flex-row justify-between sticky top-0 bg-white z-30">
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
        className="hidden md:flex items-center text-lg font-bold min-w-fit px-2 bg-[#d3e1d6]"
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
          onClick={handleSubscribeClick}
        >
          Subscribe
        </NavLink>
      </div>
      {/* mobile nav */}
      {showMobileMenu && (
        <div
          id="mobile-menu"
          className="flex flex-col gap-10 lg:hidden bg-black/[.9] text-white absolute w-full h-[600px] z-10 pl-8 py-10 top-12 left-0 font-semibold text-lg"
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
            onClick={() => {
              handleSubscribeClick();
              handleClick();
            }}
            className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
          >
            Subscribe
          </NavLink>
        </div>
      )}

      {/* subscribe modal */}
      {showSubscribe && (
        <div className="absolute w-full md:w-1/2 max-h-[600px] z-20 top-0 md:top-20 left-0 md:left-1/4 border-2 border-black bg-white">
          <div className="h-12 w-full text-white bg-black flex flex-row justify-between px-6 py-2 items-center">
            <h1 className="font-semibold text-lg">Subscribe</h1>
            <button label="close" type="button" onClick={handleSubscribeClick}>
              <div id="close" className="grid place-items-center pr-6 relative">
                <span className="w-6 h-[3px] bg-white rounded rotate-45 absolute bottom-0 left-0" />
                <span className="w-6 h-[3px] bg-white rounded -rotate-45 absolute bottom-0 left-0" />
              </div>
            </button>
          </div>
          <form className="flex flex-col items-start w-4/5 mx-auto gap-10 mt-10 mb-16">
            <label htmlFor="username" className="font-semibold min-w-full">
              Username:
              <input
                id="username"
                type="text"
                placeholder="ilovesfpopos"
                className="border-gray-300 border w-full rounded p-2 mt-4 font-normal"
              />
            </label>
            <label htmlFor="email" className="font-semibold min-w-full">
              Email:
              <input
                id="email"
                type="text"
                placeholder="love@sfpopos.com"
                className="border-gray-300 border w-full rounded p-2 mt-4 font-normal"
              />
            </label>
            <label
              htmlFor="subscribe"
              className="font-semibold min-w-full flex flex-row items-center text-left justify-items-start mt-4"
            >
              <input
                id="subscribe"
                type="checkbox"
                placeholder="love@sfpopos.com"
                className="border-gray-300 border rounded p-2 w-fit mr-4"
              />
              Subscribe to newsletter
            </label>
            <div className="flex flex-row justify-between min-w-full gap-6">
              <button
                type="button"
                onClick={handleSubscribeClick}
                className="flex-1 bg-gray-100 p-2 rounded"
              >
                Cancel
              </button>
              <button type="submit" className="flex-1 bg-black text-white font-bold p-2 rounded">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
