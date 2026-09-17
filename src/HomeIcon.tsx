import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const HomeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M6 24 L24 8 L42 24" fill="#F4A6A4"/>
<path d="M10 22 L10 40 L38 40 L38 22" fill="#E9C46A"/>
<rect x="20" y="28" width="8" height="12" fill="#264653"/>
<circle cx="16" cy="30" r="1.5" fill="#2A2A2A"/>
<circle cx="32" cy="30" r="1.5" fill="#2A2A2A"/>

  
    </svg>
  );
});

HomeIcon.displayName = 'HomeIcon';

export default HomeIcon;
