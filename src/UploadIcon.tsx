import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const UploadIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M24 16 L24 40" stroke="#2A2A2A" stroke-width="4"/>
<path d="M14 24 L24 14 L34 24" fill="#E76F51"/>
<rect x="8" y="38" width="32" height="6" rx="2" fill="#2A9D8F"/>

  
    </svg>
  );
});

UploadIcon.displayName = 'UploadIcon';

export default UploadIcon;
