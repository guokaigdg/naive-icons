import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const RocketIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M24 6 C 16 6 14 18 14 26 L14 38 L34 38 L34 26 C 34 18 32 6 24 6 Z" fill="#FAEDCD"/>
<circle cx="24" cy="22" r="5" fill="#2A9D8F"/>
<path d="M14 30 L8 36 L8 42 L14 38" fill="#E76F51"/>
<path d="M34 30 L40 36 L40 42 L34 38" fill="#E76F51"/>
<path d="M18 42 L24 46 L30 42" fill="#E76F51"/>

  
    </svg>
  );
});

RocketIcon.displayName = 'RocketIcon';

export default RocketIcon;
