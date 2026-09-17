import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const PhoneIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M10 8 L18 8 L22 18 L16 22 C 18 28 20 30 26 32 L30 26 L40 30 L40 38 C 40 40 38 42 36 42 C 22 42 6 26 6 12 C 6 10 8 8 10 8 Z" fill="#588157"/>

  
    </svg>
  );
});

PhoneIcon.displayName = 'PhoneIcon';

export default PhoneIcon;
