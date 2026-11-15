import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SpatulaIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<g transform="rotate(-24 24 26)">
<rect x="5.5" y="22" width="16" height="6.5" rx="3.25" fill="#8B5E3C"/>
<path d="M19 15 L35 15 C 37.5 15 39 17 39 19.5 L39 31 C 39 33 37.5 34 35.5 34 L19 34 Z" fill="#FFFFFF"/>
<path d="M22.5 20 L22.5 29 M27.5 20 L27.5 29 M32.5 20 L32.5 29" stroke="#2A2A2A" strokeWidth={sw(2)}/>
</g>

    </svg>
  );
});

SpatulaIcon.displayName = 'SpatulaIcon';

export default SpatulaIcon;
