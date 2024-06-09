/* eslint-disable react/require-default-props */
import React from 'react';

export default function UserIcon({ src, size = 'w-10', className }: { src: string, size?: string, className?: string }) {
  return (
    <div className={`rounded-full ${size} ${className}`}>
      <img alt="User Icon" src={src} className="rounded-full" />
    </div>
  );
}

UserIcon.defaultProps = {
  size: 'w-10',
};
