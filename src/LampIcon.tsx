import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const LampIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M17 7 L 31 7 L 37 24 L 11 24 Z" fill="#E9C46A"/>
<path d="M24 24 L 24 36" stroke="#2A2A2A" stroke-width="3"/>
<rect x="15" y="36" width="18" height="4.5" rx="2" fill="#264653"/>
<path d="M12 29 L 10 32" stroke="#2A2A2A" stroke-width="2"/>
<path d="M24 29 L 24 33" stroke="#2A2A2A" stroke-width="2"/>
<path d="M36 29 L 38 32" stroke="#2A2A2A" stroke-width="2"/>

  
    </svg>
  );
});

LampIcon.displayName = 'LampIcon';

export default LampIcon;
