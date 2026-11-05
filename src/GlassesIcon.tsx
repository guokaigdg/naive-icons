import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GlassesIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="15" cy="25" r="8" fill="#FAEDCD"/>
<circle cx="33" cy="25" r="8" fill="#FAEDCD"/>
<path d="M23 24 C 24 21 24 21 25 24" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M7 23 L7 19 M41 23 L41 19" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

GlassesIcon.displayName = 'GlassesIcon';

export default GlassesIcon;
