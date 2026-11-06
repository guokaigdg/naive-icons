import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TrafficConeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M19 10 L29 10 L34 38 L14 38 Z" fill="#E76F51"/>
<path d="M16 31 L32 31 M19 21 L29 21" stroke="#FAEDCD" strokeWidth={sw(3)} fill="none"/>
<rect x="8" y="38" width="32" height="4" rx="2" fill="#264653"/>

    </svg>
  );
});

TrafficConeIcon.displayName = 'TrafficConeIcon';

export default TrafficConeIcon;
