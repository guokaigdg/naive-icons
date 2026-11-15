import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FountainPenIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<g transform="rotate(-45 24 24)">
<rect x="6" y="19" width="20" height="10" rx="3" fill="#264653"/>
<path d="M26 19 L39 24 L26 29 Z" fill="#E9C46A"/>
<path d="M30 24 L35 24" stroke="#2A2A2A" strokeWidth={sw(2)}/>
<circle cx="38" cy="24" r="1.6" fill="#2A2A2A" stroke="none"/>
</g>

    </svg>
  );
});

FountainPenIcon.displayName = 'FountainPenIcon';

export default FountainPenIcon;
