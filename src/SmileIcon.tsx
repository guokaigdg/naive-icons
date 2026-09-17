import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const SmileIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<circle cx="24" cy="24" r="16" fill="#E9C46A"/>
<circle cx="18" cy="20" r="2" fill="#2A2A2A"/>
<circle cx="30" cy="20" r="2" fill="#2A2A2A"/>
<path d="M15 27 Q 24 36 33 27" stroke="#2A2A2A" stroke-width="3" fill="none"/>
<circle cx="13.5" cy="26" r="2.2" fill="#F4A6A4"/>
<circle cx="34.5" cy="26" r="2.2" fill="#F4A6A4"/>

  
    </svg>
  );
});

SmileIcon.displayName = 'SmileIcon';

export default SmileIcon;
