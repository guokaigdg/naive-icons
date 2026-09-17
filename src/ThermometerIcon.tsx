import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const ThermometerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M24 6 C 20 6 18 10 18 14 L18 32 C 14 36 16 42 24 42 C 32 42 34 36 30 32 L30 14 C 30 10 28 6 24 6 Z" fill="#FAEDCD"/>
<circle cx="24" cy="36" r="5" fill="#E76F51"/>
<rect x="22" y="18" width="4" height="14" fill="#E76F51"/>

  
    </svg>
  );
});

ThermometerIcon.displayName = 'ThermometerIcon';

export default ThermometerIcon;
