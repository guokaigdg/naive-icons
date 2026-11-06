import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const OxygenTankIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="16" y="12" width="16" height="28" rx="8" fill="#2A9D8F"/>
<rect x="20" y="6" width="8" height="6" rx="2" fill="#264653"/>
<path d="M22 6 L22 4.5" stroke="#2A2A2A" strokeWidth={sw(2)} fill="none"/>
<path d="M24 9 L28 5" stroke="#E9C46A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M18 22 L30 22" stroke="#FAEDCD" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

OxygenTankIcon.displayName = 'OxygenTankIcon';

export default OxygenTankIcon;
