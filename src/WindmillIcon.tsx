import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WindmillIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M19 41 L21.5 18 H26.5 L29 41 Z" fill="#FAEDCD"/>
<rect x="21.5" y="32.5" width="6" height="8.5" fill="#8B5E3C" strokeWidth={sw(2.8)}/>
<rect x="22" y="4.5" width="4" height="12.5" rx="2" fill="#E76F51" transform="rotate(45 24 17)"/>
<rect x="22" y="4.5" width="4" height="12.5" rx="2" fill="#E76F51" transform="rotate(135 24 17)"/>
<rect x="22" y="4.5" width="4" height="12.5" rx="2" fill="#E76F51" transform="rotate(225 24 17)"/>
<rect x="22" y="4.5" width="4" height="12.5" rx="2" fill="#E76F51" transform="rotate(315 24 17)"/>
<circle cx="24" cy="17" r="2.6" fill="#2A2A2A"/>

    </svg>
  );
});

WindmillIcon.displayName = 'WindmillIcon';

export default WindmillIcon;
