import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const TreeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<circle cx="24" cy="18" r="14" fill="#588157"/>
<rect x="20" y="30" width="8" height="12" fill="#8B5E3C"/>
<circle cx="20" cy="16" r="1.5" fill="#2A2A2A"/>
<circle cx="28" cy="16" r="1.5" fill="#2A2A2A"/>

  
    </svg>
  );
});

TreeIcon.displayName = 'TreeIcon';

export default TreeIcon;
