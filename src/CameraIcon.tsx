import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const CameraIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<rect x="6" y="16" width="36" height="24" rx="3" fill="#264653"/>
<path d="M18 16 L20 10 L28 10 L30 16" fill="#264653"/>
<circle cx="24" cy="28" r="8" fill="#FAEDCD"/>
<circle cx="24" cy="28" r="4" fill="#E76F51"/>
<rect x="34" y="19" width="4" height="3" fill="#E9C46A"/>

  
    </svg>
  );
});

CameraIcon.displayName = 'CameraIcon';

export default CameraIcon;
