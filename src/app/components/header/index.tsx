import React from 'react';
import MobileHeader from './mobile-header';
import ProfileIconDropDown from './profile-icon-dropdown';

export default function Header() {
  return (
    <div className="navbar bg-cover bg-gradient-to-b from-[#291D32] via-[#392039] to-[#291D32]">
      <div className="navbar-start">
        <MobileHeader />
        <a className="btn btn-ghost text-xl" href="/">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li><a href="/voce">Para você</a></li>
          <li><a href="/descobrir">Descobrir</a></li>
          <li><a href="/carreira">Carreiras</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <ProfileIconDropDown />
      </div>
    </div>
  );
}
