/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

export default function ProfileCard({
  className, userFullName, userImage, userTitle, bio,
}: { className: string, userFullName: string, userImage: string, userTitle: string, bio: string }) {
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl ${className}`}>
      <figure className="h-1/2 lg:h-full">
        <img src={userImage} alt="User profile" />
      </figure>
      <div className="card-body h-1/2 lg:h-full">
        <article className="prose text-ellipsis overflow-hidden ...">
          <h1 className="card-title text-6xl font-bold my-1">{userFullName}</h1>
          <h2 className="text-3xl my-6">{userTitle}</h2>
          <p className="whitespace-pre-line text-xl container">{bio}</p>
        </article>
      </div>
    </div>
  );
}

ProfileCard.defaultProps = {
  userFullName: 'John Doe',
  className: '',
  userImage: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
  userTitle: 'Software Engineer',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nAliquam at ipsumeu nunc commodo posuere et sit amet ligula. consectetur adipiscing elit.\nAliquam at ipsumeu nunc commodo posuere et sit amet ligula. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
};

ProfileCard.propTypes = {
  className: PropTypes.string,
  userFullName: PropTypes.string,
  userImage: PropTypes.string,
  userTitle: PropTypes.string,
  bio: PropTypes.string,
};
