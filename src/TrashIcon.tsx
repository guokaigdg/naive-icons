import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const TrashIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M10 16 L38 16 L36 42 L12 42 Z" fill="#E76F51"/>
<path d="M18 16 L18 10 L30 10 L30 16" fill="#F4A6A4"/>
<path d="M6 16 L42 16" stroke="#2A2A2A" stroke-width="3.5"/>
<path d="M19 22 L19 36" stroke="#2A2A2A" stroke-width="2.5"/>
<path d="M29 22 L29 36" stroke="#2A2A2A" stroke-width="2.5"/>

  
    </svg>
  );
});

TrashIcon.displayName = 'TrashIcon';

export default TrashIcon;
