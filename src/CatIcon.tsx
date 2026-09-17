import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const CatIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M8 16 L14 8 L18 16 Z" fill="#E76F51"/>
<path d="M30 16 L34 8 L40 16 Z" fill="#E76F51"/>
<circle cx="24" cy="28" r="16" fill="#E76F51"/>
<circle cx="18" cy="26" r="2.5" fill="#FFFFFF"/>
<circle cx="30" cy="26" r="2.5" fill="#FFFFFF"/>
<circle cx="18" cy="27" r="1.3" fill="#2A2A2A"/>
<circle cx="30" cy="27" r="1.3" fill="#2A2A2A"/>
<path d="M24 30 L22 33 L26 33 Z" fill="#F4A6A4"/>
<path d="M19 34 Q 24 38 29 34" stroke="#2A2A2A" fill="none"/>

  
    </svg>
  );
});

CatIcon.displayName = 'CatIcon';

export default CatIcon;
