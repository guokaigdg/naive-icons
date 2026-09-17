import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const FlameIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M24 5 C 19 13 12 17 12 27 C 12 36 17 42 24 42 C 31 42 36 36 36 27 C 36 19 30 15 29 9 C 26 13 23 11 24 5 Z" fill="#E76F51"/>
<path d="M24 20 C 20 25 18 28 18 32 C 18 37 21 40 24 40 C 27 40 30 37 30 32 C 30 28 26 26 24 20 Z" fill="#E9C46A"/>

  
    </svg>
  );
});

FlameIcon.displayName = 'FlameIcon';

export default FlameIcon;
