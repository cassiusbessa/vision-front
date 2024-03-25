import React from 'react';
import PropTypes from 'prop-types';
import UserIcon from '../user-icon';

export default function ProfileIconDropDown({ profileImage }: { profileImage: string }) {
  return (
    <details className="dropdown dropdown-end">
      <summary tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <span className="sr-only">Option Menu</span>
        <UserIcon src={profileImage} />
      </summary>
      <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li><a href="/perfil">Perfil</a></li>
        <li><a href="/login">Logout</a></li>
      </ul>
    </details>
  );
}

ProfileIconDropDown.propTypes = {
  profileImage: PropTypes.string,
};
ProfileIconDropDown.defaultProps = {
  profileImage: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
};
