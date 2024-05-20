import React from 'react';
import { IconType } from 'react-icons';

export default function TagElement({ tag, Icon, className = '' }:
{ tag: string, Icon: IconType, className: string }) {
  return (
    <button type="button" className={`btn ${className}`}>
      <Icon size={20} />
      {tag}
    </button>
  );
}
