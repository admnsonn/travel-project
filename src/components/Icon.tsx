import React from 'react';
import svgPaths from '../imports/svg-xs6hpzersk'; // Adjust the path if necessary

interface IconProps {
  name: keyof typeof svgPaths;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, className = '' }) => {
  const iconData = svgPaths[name];
  if (!iconData) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  const { path, viewBox } = iconData;

  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} />
    </svg>
  );
};

export default Icon;