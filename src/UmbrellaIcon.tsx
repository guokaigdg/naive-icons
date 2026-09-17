import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const UmbrellaIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M6 24 C 6 12 42 12 42 24 Z" fill="#E76F51"/>
<path d="M6 24 L42 24" stroke="#2A2A2A"/>
<path d="M24 24 L24 40" stroke="#2A2A2A" stroke-width="3"/>
<path d="M24 40 C 24 44 28 44 28 40" stroke="#2A2A2A"/>
<path d="M16 24 L16 20" stroke="#2A2A2A" stroke-width="2"/>
<path d="M32 24 L32 20" stroke="#2A2A2A" stroke-width="2"/>

  
    </svg>
  );
});

UmbrellaIcon.displayName = 'UmbrellaIcon';

export default UmbrellaIcon;
