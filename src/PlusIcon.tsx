import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const PlusIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<circle cx="24" cy="24" r="17" fill="#E9C46A"/>
<path d="M24 15 L 24 33" stroke="#2A2A2A" stroke-width="4.5"/>
<path d="M15 24 L 33 24" stroke="#2A2A2A" stroke-width="4.5"/>

  
    </svg>
  );
});

PlusIcon.displayName = 'PlusIcon';

export default PlusIcon;
