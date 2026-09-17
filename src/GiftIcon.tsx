import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const GiftIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<rect x="8" y="20" width="32" height="22" fill="#E76F51"/>
<rect x="8" y="14" width="32" height="8" fill="#F4A6A4"/>
<path d="M24 14 L24 42" stroke="#2A2A2A" stroke-width="3"/>
<path d="M18 14 C 12 10 16 4 22 8 C 24 10 24 14 24 14 Z" fill="#F4A6A4"/>
<path d="M30 14 C 36 10 32 4 26 8 C 24 10 24 14 24 14 Z" fill="#F4A6A4"/>

  
    </svg>
  );
});

GiftIcon.displayName = 'GiftIcon';

export default GiftIcon;
