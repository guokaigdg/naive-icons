import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TripodIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="16" y="7" width="16" height="11" rx="3" fill="#264653"/>
<circle cx="24" cy="12.5" r="3.2" fill="#FAEDCD" stroke="none"/>
<path d="M24 18 L24 27" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M24 27 L12 41 M24 27 L36 41 M24 27 L24 42" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M18 38 L24 41 L30 38" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

TripodIcon.displayName = 'TripodIcon';

export default TripodIcon;
