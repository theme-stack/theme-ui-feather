import React from 'react';
import SVG from '../SVG';

const ChevronDown = ({ color = 'currentColor', size = 24, ...otherProps }) => {
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
      <polyline points="6 9 12 15 18 9"></polyline>
    </SVG>
  );
};

export default ChevronDown;
