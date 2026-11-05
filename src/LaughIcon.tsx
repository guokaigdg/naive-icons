import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LaughIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="24" r="16" fill="#E9C46A"/>
<path d="M15 20 Q 18 15 21 20" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M27 20 Q 30 15 33 20" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M14 26 Q 24 42 34 26 Z" fill="#2A2A2A" stroke="none"/>
<path d="M17 27 L31 27" stroke="#FFFFFF" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="12.5" cy="27" r="2.2" fill="#F4A6A4" stroke="none"/>
<circle cx="35.5" cy="27" r="2.2" fill="#F4A6A4" stroke="none"/>

    </svg>
  );
});

LaughIcon.displayName = 'LaughIcon';

export default LaughIcon;
