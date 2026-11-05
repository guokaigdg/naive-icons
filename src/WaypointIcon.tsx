import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WaypointIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 38 C14 30 18 34 24 24 C28 17 34 18 40 12" stroke="#2A9D8F" strokeWidth={sw(2.5)} fill="none"/>
<path d="M24 18 L30 24 L24 30 L18 24 Z" fill="#E76F51"/>
<circle cx="24" cy="24" r="2.5" fill="#FFFFFF" stroke="none"/>

    </svg>
  );
});

WaypointIcon.displayName = 'WaypointIcon';

export default WaypointIcon;
