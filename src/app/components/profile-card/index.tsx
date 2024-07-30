/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function ProfileCard({
  className, userFullName, userImage, userTitle, bio,
}: { className: string, userFullName: string,
  userImage: string | undefined, userTitle: string, bio: string }) {
  return (
    <div className={`card md:card-side shadow-xl ${className}`}>
      <figure className="h-2/6 w-full md:h-full md:w-1/2">
        <div className="bg-base-200 md:h-4/6 md:w-full" />
        <img src={userImage} alt="User profile" className=" max-h-[400px] md:h-full md:max-h-full w-full md:w-11/12" />
      </figure>
      <div className="card-body h-4/6 w-full md:h-full md:w-1/2">
        <article className="prose text-ellipsis overflow-hidden ...">
          <h1 className="card-title font-bold my-1 sm:text-6xl">{userFullName}</h1>
          <h2 className="my-6 sm:text-3xl">{userTitle}</h2>
          <p className="whitespace-pre-line sm:text-xl">{bio}</p>
        </article>
      </div>
    </div>
  );
}
