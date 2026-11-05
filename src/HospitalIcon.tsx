import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HospitalIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="10" y="10" width="28" height="32" rx="4" fill="#FAEDCD"/>
<path d="M20 16 L28 16 L28 22 L34 22 L34 30 L28 30 L28 36 L20 36 L20 30 L14 30 L14 22 L20 22 Z" fill="#E76F51" stroke="none"/>
<rect x="13" y="38" width="5" height="4" fill="#2A9D8F" stroke="none"/>
<rect x="30" y="38" width="5" height="4" fill="#2A9D8F" stroke="none"/>

    </svg>
  );
});

HospitalIcon.displayName = 'HospitalIcon';

export default HospitalIcon;
