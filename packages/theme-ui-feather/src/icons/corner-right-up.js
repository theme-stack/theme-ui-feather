import React from 'react';
import SVG from '../SVG';

const CornerRightUp = ({
  color = 'currentColor',
  size = 24,
  ...otherProps
}) => {
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
      <polyline points="10 9 15 4 20 9"></polyline>
      <path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
    </SVG>
  );
};

export default CornerRightUp;
