import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const ClockIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<circle cx="24" cy="24" r="18" fill="#2A9D8F"/>
<path d="M24 24 L24 13" stroke="#FFFFFF" stroke-width="3"/>
<path d="M24 24 L33 28" stroke="#FFFFFF" stroke-width="3"/>
<circle cx="24" cy="24" r="2" fill="#2A2A2A"/>

  
    </svg>
  );
});

ClockIcon.displayName = 'ClockIcon';

export default ClockIcon;
