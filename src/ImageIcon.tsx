import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const ImageIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<rect x="6" y="10" width="36" height="28" rx="3" fill="#FAEDCD"/>
<circle cx="16" cy="20" r="3" fill="#E9C46A"/>
<path d="M10 36 L20 24 L28 32 L36 22 L42 36 Z" fill="#2A9D8F"/>
<path d="M10 36 L42 36" stroke="#2A2A2A"/>

  
    </svg>
  );
});

ImageIcon.displayName = 'ImageIcon';

export default ImageIcon;
