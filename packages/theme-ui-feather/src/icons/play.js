import React from 'react';
import SVG from '../SVG';

const Play = ({ color = 'currentColor', size = 24, ...otherProps }) => {
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
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </SVG>
  );
};

export default Play;
