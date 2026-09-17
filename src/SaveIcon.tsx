import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const SaveIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M10 7 L 32 7 L 40 15 L 40 41 L 8 41 L 8 7 Z" fill="#264653"/>
<rect x="15" y="7" width="14" height="11" fill="#F4A6A4"/>
<rect x="26" y="9.5" width="4" height="6" fill="#FAEDCD"/>
<rect x="15" y="25" width="18" height="16" fill="#FAEDCD"/>
<path d="M19 31 L 29 31 M 19 35 L 26 35" stroke="#2A2A2A" stroke-width="2"/>

  
    </svg>
  );
});

SaveIcon.displayName = 'SaveIcon';

export default SaveIcon;
