import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const OfficeChairIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="13" y="7" width="22" height="17" rx="4" fill="#264653"/>
<rect x="9" y="24" width="30" height="6" rx="3" fill="#E76F51"/>
<path d="M24 30 L24 37 M15 37 L33 37" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<circle cx="12" cy="39" r="2.5" fill="#2A2A2A"/>
<circle cx="36" cy="39" r="2.5" fill="#2A2A2A"/>

    </svg>
  );
});

OfficeChairIcon.displayName = 'OfficeChairIcon';

export default OfficeChairIcon;
