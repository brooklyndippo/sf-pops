// src/Title.js
import React from 'react';
import './Title.css';
import '../../index.css';
import { NavLink } from 'react-router-dom';

export default function Title() {
  return (
    <div className="text-xl bg-purple-50">
      <h1>SFPOPOS</h1>
      <div className="Title-Subtitle">San Franciscos Privately Owned Public Spaces</div>

      <div>
        <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')} to="/">List</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')} to="/about">About</NavLink>
      </div>
    </div>
  );
}
