import React from 'react';
import SVG from '../SVG';

const ArrowDownRight = ({
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
      <line x1="7" y1="7" x2="17" y2="17"></line>
      <polyline points="17 7 17 17 7 17"></polyline>
    </SVG>
  );
};

export default ArrowDownRight;
