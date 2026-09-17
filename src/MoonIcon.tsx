import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const MoonIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M32 6 C 22 8 14 16 14 26 C 14 36 22 42 32 42 C 24 40 20 32 22 24 C 24 16 28 10 32 6 Z" fill="#E9C46A"/>
<circle cx="36" cy="14" r="1.5" fill="#2A2A2A"/>
<circle cx="40" cy="22" r="1.5" fill="#2A2A2A"/>

  
    </svg>
  );
});

MoonIcon.displayName = 'MoonIcon';

export default MoonIcon;
