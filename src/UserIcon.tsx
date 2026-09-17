import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const UserIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<circle cx="24" cy="16" r="8.5" fill="#E76F51"/>
<path d="M7 43 C 7 33 14 29 24 29 C 34 29 41 33 41 43" fill="#2A9D8F"/>
<circle cx="21" cy="16" r="1.6" fill="#2A2A2A"/>
<circle cx="27" cy="16" r="1.6" fill="#2A2A2A"/>
<path d="M20.5 20 Q 24 23 27.5 20" stroke="#2A2A2A" fill="none"/>

  
    </svg>
  );
});

UserIcon.displayName = 'UserIcon';

export default UserIcon;
