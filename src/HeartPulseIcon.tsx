import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HeartPulseIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 40 C 8 30 4 18 12 12 C 18 8 22 12 24 16 C 26 12 30 8 36 12 C 44 18 40 30 24 40 Z" fill="#E76F51"/>
<path d="M10 26 L17 26 L20 20 L25 32 L29 25 L36 25" stroke="#FAEDCD" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

HeartPulseIcon.displayName = 'HeartPulseIcon';

export default HeartPulseIcon;
