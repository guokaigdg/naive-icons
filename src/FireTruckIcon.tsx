import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FireTruckIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 18 H30 V34 H8 Z" fill="#E76F51"/>
<path d="M30 22 H36 L41 27 V34 H30 Z" fill="#E76F51"/>
<path d="M10 12 H38" stroke="#264653" strokeWidth={sw(2.5)}/>
<path d="M12 12 V18 M20 12 V18 M28 12 V18 M36 12 V18" stroke="#264653" strokeWidth={sw(2.5)}/>
<circle cx="14" cy="36" r="4.5" fill="#264653"/>
<circle cx="34" cy="36" r="4.5" fill="#264653"/>

    </svg>
  );
});

FireTruckIcon.displayName = 'FireTruckIcon';

export default FireTruckIcon;
