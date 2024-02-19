import React from 'react';
import MobileHeader from './mobile-header';

export default function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <MobileHeader />
        <a className="btn btn-ghost text-xl" href="/">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/voce">Para você</a></li>
          <li><a href="/descobrir">Descobrir</a></li>
          <li><a href="/carreira">Carreiras</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
