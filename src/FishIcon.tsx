import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const FishIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M6 24 C 8 14 22 10 30 14 C 38 18 38 30 30 34 C 22 38 8 34 6 24 Z" fill="#2A9D8F"/>
<path d="M30 24 L42 14 L42 34 Z" fill="#E76F51"/>
<circle cx="14" cy="22" r="2" fill="#FFFFFF"/>
<circle cx="14" cy="22" r="1" fill="#2A2A2A"/>

  
    </svg>
  );
});

FishIcon.displayName = 'FishIcon';

export default FishIcon;
