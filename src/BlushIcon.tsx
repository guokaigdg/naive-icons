import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BlushIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
<circle cx="18" cy="20" r="2" fill="#2A2A2A" stroke="none"/>
<circle cx="30" cy="20" r="2" fill="#2A2A2A" stroke="none"/>
<circle cx="14" cy="28" r="4" fill="#F4A6A4" stroke="none"/>
<circle cx="34" cy="28" r="4" fill="#F4A6A4" stroke="none"/>
<path d="M19 28 C21 32 27 32 29 28" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

BlushIcon.displayName = 'BlushIcon';

export default BlushIcon;
