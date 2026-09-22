import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const BasketballIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      
<circle cx="24" cy="24" r="18" fill="#E76F51"/>
<path d="M24 6 L24 42" stroke="#2A2A2A" stroke-width="2.5"/>
<path d="M6 24 L42 24" stroke="#2A2A2A" stroke-width="2.5"/>
<path d="M11 12 C 17 18 17 30 11 36" stroke="#2A2A2A" stroke-width="2.5"/>
<path d="M37 12 C 31 18 31 30 37 36" stroke="#2A2A2A" stroke-width="2.5"/>

    </svg>
  );
});

BasketballIcon.displayName = 'BasketballIcon';

export default BasketballIcon;
