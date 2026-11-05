import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const AirportIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="14" y="10" width="20" height="31" rx="3" fill="#264653"/>
<path d="M18 16 L30 16 M18 22 L30 22" stroke="#FAEDCD" strokeWidth={sw(2.5)} fill="none"/>
<path d="M10 8 L22 6 L34 8" stroke="#2A9D8F" strokeWidth={sw(2.5)} fill="none"/>
<path d="M8 41 L40 41" stroke="#264653" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

AirportIcon.displayName = 'AirportIcon';

export default AirportIcon;
