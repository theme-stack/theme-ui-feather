import React from 'react';
import SVG from '../SVG';

const Voicemail = ({ color = 'currentColor', size = 24, ...otherProps }) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <circle cx="5.5" cy="11.5" r="4.5"></circle>
      <circle cx="18.5" cy="11.5" r="4.5"></circle>
      <line x1="5.5" y1="16" x2="18.5" y2="16"></line>
    </SVG>
  );
};

export default Voicemail;