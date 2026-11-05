import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GymIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="9" y="16" width="30" height="24" rx="2" fill="#E9C46A"/>
<path d="M18 24 L18 32 M30 24 L30 32 M18 28 L30 28" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<rect x="14" y="25" width="4" height="6" fill="#264653" stroke="none"/>
<rect x="30" y="25" width="4" height="6" fill="#264653" stroke="none"/>
<path d="M7 40 L41 40" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>

    </svg>
  );
});

GymIcon.displayName = 'GymIcon';

export default GymIcon;
