import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const LeafIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M8 40 C 8 18 24 6 40 8 C 40 24 26 40 8 40 Z" fill="#588157"/>
<path d="M8 40 L40 8" stroke="#2A2A2A" stroke-width="2"/>

  
    </svg>
  );
});

LeafIcon.displayName = 'LeafIcon';

export default LeafIcon;
