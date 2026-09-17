import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const MapIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M8 12 L 18 8 L 30 12 L 40 8 L 40 34 L 30 38 L 18 34 L 8 38 Z" fill="#FAEDCD"/>
<path d="M18 8 L 18 34" stroke="#2A2A2A" stroke-width="2.5"/>
<path d="M30 12 L 30 38" stroke="#2A2A2A" stroke-width="2.5"/>
<path d="M12 30 C 15 23 21 28 24 21 C 26 17 29 18 31 16" stroke="#E76F51" stroke-width="2.5" fill="none"/>
<circle cx="32" cy="15" r="2.2" fill="#E76F51"/>

  
    </svg>
  );
});

MapIcon.displayName = 'MapIcon';

export default MapIcon;
