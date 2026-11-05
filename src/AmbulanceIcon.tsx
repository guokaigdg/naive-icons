import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const AmbulanceIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const labelled = Boolean(props.title || props['aria-label'] || props.role);
  const sw = scaledStroke(props.strokeWidth);
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

<rect x="6" y="16" width="24" height="20" rx="3" fill="#FAEDCD"/>
<path d="M30 20 L38 20 L42 26 L42 36 L30 36 Z" fill="#E76F51"/>
<path d="M15 22 L21 22 L21 26 L25 26 L25 32 L21 32 L21 36 L15 36 L15 32 L11 32 L11 26 L15 26 Z" fill="#E76F51" stroke="none"/>
<circle cx="14" cy="37" r="4" fill="#264653"/>
<circle cx="34" cy="37" r="4" fill="#264653"/>
<circle cx="14" cy="37" r="1.3" fill="#FAEDCD" stroke="none"/>
<circle cx="34" cy="37" r="1.3" fill="#FAEDCD" stroke="none"/>

    </svg>
  );
});

AmbulanceIcon.displayName = 'AmbulanceIcon';

export default AmbulanceIcon;
