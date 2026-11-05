import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ParkingIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="10" y="6" width="28" height="36" rx="4" fill="#264653"/>
<path d="M19 36 L19 14 L28 14 C33 14 33 24 28 24 L19 24" stroke="#FAEDCD" strokeWidth={sw(4)} fill="none"/>

    </svg>
  );
});

ParkingIcon.displayName = 'ParkingIcon';

export default ParkingIcon;
