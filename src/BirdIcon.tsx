import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const BirdIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const labelled = Boolean(props.title || props['aria-label'] || props.role);
  return (
    <svg
      ref={ref}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={props.title ? 'img' : undefined}
      aria-hidden={labelled ? undefined : true}
      {...normalizeIconProps(props)}
    >
      {props.title ? <title>{props.title}</title> : null}

    
<ellipse cx="22" cy="26" rx="16" ry="12" fill="#2A9D8F"/>
<path d="M36 24 L42 20 L42 28 Z" fill="#E76F51"/>
<path d="M28 18 L36 14 L34 22 Z" fill="#264653"/>
<circle cx="34" cy="22" r="2" fill="#FFFFFF"/>
<circle cx="34" cy="22" r="1" fill="#2A2A2A"/>

  
    </svg>
  );
});

BirdIcon.displayName = 'BirdIcon';

export default BirdIcon;
