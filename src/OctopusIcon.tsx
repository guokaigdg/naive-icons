import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const OctopusIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M10 26 C 10 12 38 12 38 26 C 38 30 35 32 32 32 L16 32 C 13 32 10 30 10 26 Z" fill="#F4A6A4"/>
<path d="M16 31 C 14 36 18 37 16 42" stroke="#2A9D8F" strokeWidth={sw(4)} fill="none"/>
<path d="M24 32 L24 42" stroke="#2A9D8F" strokeWidth={sw(4)} fill="none"/>
<path d="M32 31 C 34 36 30 37 32 42" stroke="#2A9D8F" strokeWidth={sw(4)} fill="none"/>
<circle cx="18" cy="20" r="2" fill="#2A2A2A" stroke="none"/>
<circle cx="30" cy="20" r="2" fill="#2A2A2A" stroke="none"/>

    </svg>
  );
});

OctopusIcon.displayName = 'OctopusIcon';

export default OctopusIcon;
