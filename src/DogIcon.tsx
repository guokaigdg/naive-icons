import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const DogIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<ellipse cx="10" cy="18" rx="6" ry="10" fill="#8B5E3C"/>
<ellipse cx="38" cy="18" rx="6" ry="10" fill="#8B5E3C"/>
<circle cx="24" cy="26" r="16" fill="#8B5E3C"/>
<circle cx="18" cy="24" r="2.5" fill="#FFFFFF"/>
<circle cx="30" cy="24" r="2.5" fill="#FFFFFF"/>
<circle cx="18" cy="25" r="1.3" fill="#2A2A2A"/>
<circle cx="30" cy="25" r="1.3" fill="#2A2A2A"/>
<ellipse cx="24" cy="32" rx="4" ry="3" fill="#2A2A2A"/>

  
    </svg>
  );
});

DogIcon.displayName = 'DogIcon';

export default DogIcon;
