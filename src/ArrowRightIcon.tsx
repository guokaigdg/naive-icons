import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const ArrowRightIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M9 24 L30 24" stroke="#2A2A2A" stroke-width="4"/>
<path d="M25 15 L39 24 L25 33 Z" fill="#E76F51"/>

  
    </svg>
  );
});

ArrowRightIcon.displayName = 'ArrowRightIcon';

export default ArrowRightIcon;
