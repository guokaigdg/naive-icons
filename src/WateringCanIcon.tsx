import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WateringCanIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="18" y="20" width="18" height="18" rx="4" fill="#2A9D8F"/>
<path d="M18 27 L9 19 L6 22 L15 31 Z" fill="#264653"/>
<circle cx="9" cy="17" r="4" fill="#E76F51"/>
<path d="M34 22 C 40 15 43 22 37 28" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M22 38 L22 42 M28 38 L28 42 M32 38 L32 42" stroke="#2A9D8F" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

WateringCanIcon.displayName = 'WateringCanIcon';

export default WateringCanIcon;
