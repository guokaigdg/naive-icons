import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const CloudIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M14 30 C 8 30 6 22 12 20 C 12 14 20 12 24 16 C 28 10 38 14 36 22 C 42 22 42 30 36 30 Z" fill="#FAEDCD"/>
<circle cx="20" cy="24" r="1.5" fill="#2A2A2A"/>
<circle cx="28" cy="24" r="1.5" fill="#2A2A2A"/>

  
    </svg>
  );
});

CloudIcon.displayName = 'CloudIcon';

export default CloudIcon;
