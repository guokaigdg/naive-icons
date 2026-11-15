import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const KebabIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<g transform="rotate(-35 24 24)">
<path d="M6 24 L42 24" stroke="#2A2A2A" strokeWidth={sw(3)}/>
<rect x="12" y="19" width="10" height="10" rx="2.5" fill="#8B5E3C"/>
<rect x="26" y="19.5" width="9" height="9" rx="2.5" fill="#588157"/>
<circle cx="39" cy="24" r="4.5" fill="#E76F51"/>
</g>

    </svg>
  );
});

KebabIcon.displayName = 'KebabIcon';

export default KebabIcon;
