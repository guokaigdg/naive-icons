import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HolePunchIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="10" y="19" width="28" height="16" rx="3" fill="#E76F51"/>
<path d="M10 19 L17 9 L31 9 L38 19 Z" fill="#264653"/>
<circle cx="19" cy="27" r="2.5" fill="#FAEDCD" stroke="none"/>
<circle cx="29" cy="27" r="2.5" fill="#FAEDCD" stroke="none"/>

    </svg>
  );
});

HolePunchIcon.displayName = 'HolePunchIcon';

export default HolePunchIcon;
