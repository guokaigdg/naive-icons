import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ForkliftIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="10" y="22" width="14" height="12" rx="2" fill="#E9C46A"/>
<circle cx="14" cy="35" r="4" fill="#264653"/>
<circle cx="24" cy="35" r="4" fill="#264653"/>
<path d="M32 10 L32 36 M32 30 L40 30 M32 36 L40 36" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>
<path d="M24 24 L32 24" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

ForkliftIcon.displayName = 'ForkliftIcon';

export default ForkliftIcon;
