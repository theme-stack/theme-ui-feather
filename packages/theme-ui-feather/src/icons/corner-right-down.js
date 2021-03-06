import React from 'react';
import SVG from '../SVG';

const CornerRightDown = ({
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
      <polyline points="10 15 15 20 20 15"></polyline>
      <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
    </SVG>
  );
};

export default CornerRightDown;
