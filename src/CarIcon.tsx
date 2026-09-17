import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const CarIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M6 30 L6 36 L42 36 L42 30 L36 18 L12 18 Z" fill="#E76F51"/>
<path d="M14 18 L14 12 L34 12 L34 18" fill="#E9C46A"/>
<circle cx="14" cy="36" r="5" fill="#264653"/>
<circle cx="34" cy="36" r="5" fill="#264653"/>

  
    </svg>
  );
});

CarIcon.displayName = 'CarIcon';

export default CarIcon;
