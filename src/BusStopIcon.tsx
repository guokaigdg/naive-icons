import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BusStopIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 42 V16" stroke="#8B5E3C" strokeWidth={sw(3)} fill="none"/>
<rect x="6" y="6" width="36" height="16" rx="3" fill="#2A9D8F"/>
<rect x="12" y="10" width="12" height="8" rx="2" fill="#FAEDCD" stroke="none"/>
<circle cx="15" cy="19" r="1.5" fill="#2A2A2A" stroke="none"/>
<circle cx="21" cy="19" r="1.5" fill="#2A2A2A" stroke="none"/>
<path d="M28 11 H37 M28 17 H37" stroke="#FAEDCD" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

BusStopIcon.displayName = 'BusStopIcon';

export default BusStopIcon;
