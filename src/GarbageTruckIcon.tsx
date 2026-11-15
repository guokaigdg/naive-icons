import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GarbageTruckIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="5" y="13" width="19" height="18" rx="2" fill="#2A9D8F"/>
<path d="M8 17.5 H21" stroke="#FAEDCD" strokeWidth={sw(2.2)} fill="none"/>
<rect x="24" y="18" width="15" height="13" rx="2" fill="#E76F51"/>
<rect x="27" y="21" width="8" height="5" fill="#FAEDCD" stroke="none"/>
<circle cx="13" cy="36" r="4.5" fill="#264653"/>
<circle cx="33" cy="36" r="4.5" fill="#264653"/>
<circle cx="13" cy="36" r="1.6" fill="#FAEDCD" stroke="none"/>
<circle cx="33" cy="36" r="1.6" fill="#FAEDCD" stroke="none"/>

    </svg>
  );
});

GarbageTruckIcon.displayName = 'GarbageTruckIcon';

export default GarbageTruckIcon;
