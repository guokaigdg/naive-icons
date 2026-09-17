import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const CloseIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<circle cx="24" cy="24" r="17" fill="#FAEDCD"/>
<path d="M17 17 L 31 31" stroke="#E76F51" stroke-width="4.5"/>
<path d="M31 17 L 17 31" stroke="#E76F51" stroke-width="4.5"/>

  
    </svg>
  );
});

CloseIcon.displayName = 'CloseIcon';

export default CloseIcon;
