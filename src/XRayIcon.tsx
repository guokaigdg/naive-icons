import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const XRayIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="7" y="6" width="34" height="36" rx="2" fill="#264653"/>
<path d="M24 12 L24 36" stroke="#FAEDCD" strokeWidth={sw(3)} fill="none"/>
<path d="M24 16 C18 16 15 19 15 24 M24 22 C18 22 15 25 15 30" stroke="#FAEDCD" strokeWidth={sw(2)} fill="none"/>
<path d="M24 16 C30 16 33 19 33 24 M24 22 C30 22 33 25 33 30" stroke="#FAEDCD" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

XRayIcon.displayName = 'XRayIcon';

export default XRayIcon;
