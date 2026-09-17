import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const FlowerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<circle cx="24" cy="16" r="7" fill="#F4A6A4"/>
<circle cx="14" cy="22" r="7" fill="#F4A6A4"/>
<circle cx="34" cy="22" r="7" fill="#F4A6A4"/>
<circle cx="18" cy="32" r="7" fill="#F4A6A4"/>
<circle cx="30" cy="32" r="7" fill="#F4A6A4"/>
<circle cx="24" cy="24" r="6" fill="#E9C46A"/>

  
    </svg>
  );
});

FlowerIcon.displayName = 'FlowerIcon';

export default FlowerIcon;
