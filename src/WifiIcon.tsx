import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const WifiIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M9 21 A 19 19 0 0 1 39 21" stroke="#2A9D8F" stroke-width="4" fill="none"/>
<path d="M15 28 A 11.5 11.5 0 0 1 33 28" stroke="#E76F51" stroke-width="4" fill="none"/>
<circle cx="24" cy="35" r="4" fill="#E9C46A"/>

  
    </svg>
  );
});

WifiIcon.displayName = 'WifiIcon';

export default WifiIcon;
