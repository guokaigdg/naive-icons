import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const RefreshIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M37 16 A 14.5 14.5 0 1 0 38.5 24" stroke="#2A9D8F" stroke-width="3.5" fill="none"/>
<path d="M30 10 L 39 11 L 35 19 Z" fill="#E76F51"/>

  
    </svg>
  );
});

RefreshIcon.displayName = 'RefreshIcon';

export default RefreshIcon;
