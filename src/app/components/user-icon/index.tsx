import React from 'react';

export default function UserIcon({ src, size = 'w-10' }: { src: string, size?: string }) {
  return (
    <div className={`rounded-full ${size}`}>
      <img alt="User Icon" src={src} className="rounded-full" />
    </div>
  );
}

UserIcon.defaultProps = {
  size: 'w-10',
};
