import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const VrHeadsetIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M7 16 H41 V26 C41 32 37 34 33 34 C29 34 27 30 24 30 C21 30 19 34 15 34 C11 34 7 32 7 26 Z" fill="#264653"/>
<rect x="13" y="20" width="9" height="5" rx="2" fill="#2A9D8F" stroke="none"/>
<rect x="26" y="20" width="9" height="5" rx="2" fill="#2A9D8F" stroke="none"/>

    </svg>
  );
});

VrHeadsetIcon.displayName = 'VrHeadsetIcon';

export default VrHeadsetIcon;
