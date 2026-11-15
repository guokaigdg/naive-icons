import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SnowGlobeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="20" r="15" fill="#FFFFFF"/>
<path d="M10.5 27.5 C 15 31 33 31 37.5 27.5" stroke="#264653" strokeWidth={sw(2.2)} fill="none"/>
<rect x="20" y="19" width="9" height="9" fill="#E76F51"/>
<path d="M18 19 L24.5 13.5 L31 19 Z" fill="#264653"/>
<circle cx="16" cy="13" r="1.4" fill="#2A9D8F" stroke="none"/>
<circle cx="32" cy="15.5" r="1.4" fill="#2A9D8F" stroke="none"/>
<circle cx="30" cy="24" r="1.4" fill="#2A9D8F" stroke="none"/>
<circle cx="15" cy="21" r="1.4" fill="#2A9D8F" stroke="none"/>
<rect x="12" y="33" width="24" height="9" rx="3" fill="#8B5E3C"/>

    </svg>
  );
});

SnowGlobeIcon.displayName = 'SnowGlobeIcon';

export default SnowGlobeIcon;
