import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const HeadphonesIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M10 31 L 10 25 C 10 11 38 11 38 25 L 38 31" stroke="#2A2A2A" stroke-width="4" fill="none"/>
<rect x="6" y="27" width="8" height="12" rx="3.5" fill="#E76F51"/>
<rect x="34" y="27" width="8" height="12" rx="3.5" fill="#E76F51"/>

  
    </svg>
  );
});

HeadphonesIcon.displayName = 'HeadphonesIcon';

export default HeadphonesIcon;
