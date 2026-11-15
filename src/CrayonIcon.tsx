import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CrayonIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
<rect x="7" y="18.5" width="24" height="11" rx="1" fill="#E76F51"/>
<rect x="12" y="18.5" width="9" height="11" fill="#FAEDCD" stroke="none"/>
<path d="M12 18.5 L12 29.5 M21 18.5 L21 29.5" stroke="#2A2A2A" strokeWidth={sw(2)}/>
<path d="M31 18.5 L40 24 L31 29.5 Z" fill="#F4A6A4"/>
</g>

    </svg>
  );
});

CrayonIcon.displayName = 'CrayonIcon';

export default CrayonIcon;
