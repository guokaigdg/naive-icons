import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ChargingStationIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="12" y="8" width="18" height="30" rx="3" fill="#2A9D8F"/>
<rect x="16" y="13" width="10" height="6" rx="1" fill="#FAEDCD" stroke="none"/>
<path d="M24 22 L20 28 H24 L21 34" stroke="#E9C46A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M30 18 C38 18 38 30 34 32 C31 33.5 30 36 30 38" fill="none" strokeWidth={sw(3)}/>

    </svg>
  );
});

ChargingStationIcon.displayName = 'ChargingStationIcon';

export default ChargingStationIcon;
