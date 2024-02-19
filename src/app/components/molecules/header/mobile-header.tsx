import React from 'react';

export default function MobileHeader() {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" aria-label="dropdown-button">
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="/voce">Para você</a></li>
        <li><a href="/descobrir">Descobrir</a></li>
        <li><a href="/carreira">Carreiras</a></li>
      </ul>
    </div>
  );
}
