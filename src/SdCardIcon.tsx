import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SdCardIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M14 7 L30 7 L38 15 L38 41 L14 41 Z" fill="#264653"/>
<path d="M30 7 L30 15 L38 15" stroke="#2A2A2A" fill="none"/>
<rect x="19" y="18" width="4" height="8" fill="#FAEDCD" stroke="none"/>
<rect x="25" y="18" width="4" height="8" fill="#FAEDCD" stroke="none"/>
<rect x="31" y="18" width="4" height="8" fill="#FAEDCD" stroke="none"/>

    </svg>
  );
});

SdCardIcon.displayName = 'SdCardIcon';

export default SdCardIcon;
