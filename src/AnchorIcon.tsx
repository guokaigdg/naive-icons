import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const AnchorIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<circle cx="24" cy="10" r="4" fill="#264653"/>
<path d="M24 14 L24 38" stroke="#2A2A2A" stroke-width="4"/>
<path d="M16 22 L24 22 L32 22" stroke="#2A2A2A" stroke-width="3"/>
<path d="M8 30 C 8 38 14 42 24 42 C 34 42 40 38 40 30" fill="none" stroke="#2A2A2A"/>
<path d="M8 30 L12 26 L16 30" fill="#264653"/>
<path d="M32 30 L36 26 L40 30" fill="#264653"/>

  
    </svg>
  );
});

AnchorIcon.displayName = 'AnchorIcon';

export default AnchorIcon;
