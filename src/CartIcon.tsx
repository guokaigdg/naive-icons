import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const CartIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M6 8 L12 8 L16 32 L38 32 L42 16 L16 16" fill="#2A9D8F"/>
<circle cx="18" cy="40" r="4" fill="#E76F51"/>
<circle cx="34" cy="40" r="4" fill="#E76F51"/>

  
    </svg>
  );
});

CartIcon.displayName = 'CartIcon';

export default CartIcon;
