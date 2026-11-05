import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const VanIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M6 18 L24 18 L34 26 L41 26 L41 34 L6 34 Z" fill="#FAEDCD"/>
<path d="M24 18 L24 26 L34 26" stroke="#264653" strokeWidth={sw(2)} fill="none"/>
<circle cx="14" cy="36" r="4" fill="#264653"/>
<circle cx="34" cy="36" r="4" fill="#264653"/>

    </svg>
  );
});

VanIcon.displayName = 'VanIcon';

export default VanIcon;
