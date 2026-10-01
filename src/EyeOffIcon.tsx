import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const EyeOffIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      
<path d="M5 24 C 11 13 37 13 43 24 C 37 35 11 35 5 24 Z" fill="#FAEDCD"/>
<circle cx="24" cy="24" r="6.5" fill="#2A9D8F"/>
<circle cx="24" cy="24" r="3" fill="#2A2A2A"/>
<path d="M8 8 L 40 40" fill="none" stroke="#E76F51" stroke-width="3.5"/>

    </svg>
  );
});

EyeOffIcon.displayName = 'EyeOffIcon';

export default EyeOffIcon;
