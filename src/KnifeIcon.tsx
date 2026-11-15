import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const KnifeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<g transform="rotate(-32 24 24)">
<rect x="6" y="20" width="12" height="8" rx="4" fill="#8B5E3C"/>
<path d="M16 18.5 L34 20 C 38 21 40 23 40.5 25.5 C 39.5 27.5 36.5 28.5 33 28.5 L16 28.5 Z" fill="#FFFFFF" strokeWidth={sw(3)}/>
<path d="M16 18.5 L16 28.5" stroke="#2A2A2A" strokeWidth={sw(2)}/>
<circle cx="9.5" cy="24" r="1.2" fill="#FAEDCD" stroke="none"/>
<circle cx="12.5" cy="24" r="1.2" fill="#FAEDCD" stroke="none"/>
</g>

    </svg>
  );
});

KnifeIcon.displayName = 'KnifeIcon';

export default KnifeIcon;
