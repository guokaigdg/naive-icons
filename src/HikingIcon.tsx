import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HikingIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="22" cy="9" r="4" fill="#2A9D8F"/>
<path d="M21 14 L19 26 L14 36 M19 26 L25 34" strokeWidth={sw(3.5)} fill="none"/>
<path d="M21 18 L28 22" strokeWidth={sw(3)} fill="none"/>
<path d="M28 22 L32 38" stroke="#8B5E3C" strokeWidth={sw(3)} fill="none"/>
<path d="M19 18 L14 24" strokeWidth={sw(3)} fill="none"/>
<rect x="17" y="15" width="6" height="7" rx="1" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

HikingIcon.displayName = 'HikingIcon';

export default HikingIcon;
