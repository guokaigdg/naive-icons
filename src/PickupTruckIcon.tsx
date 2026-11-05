import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PickupTruckIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M6 34 L6 22 L16 22 L22 16 L30 16 L30 34 Z" fill="#E76F51"/>
<path d="M30 22 L42 22 L42 34 L30 34 Z" fill="#E9C46A"/>
<circle cx="13" cy="36" r="4" fill="#264653"/>
<circle cx="35" cy="36" r="4" fill="#264653"/>

    </svg>
  );
});

PickupTruckIcon.displayName = 'PickupTruckIcon';

export default PickupTruckIcon;
