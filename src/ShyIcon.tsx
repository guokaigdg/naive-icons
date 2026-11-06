import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ShyIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
<path d="M15 20 C17 19 19 19 21 20" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M27 20 C29 19 31 19 33 20" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M18 30 C20 32 28 32 30 30" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<ellipse cx="14" cy="27" rx="3" ry="1.8" fill="#F4A6A4" stroke="none"/>
<ellipse cx="34" cy="27" rx="3" ry="1.8" fill="#F4A6A4" stroke="none"/>

    </svg>
  );
});

ShyIcon.displayName = 'ShyIcon';

export default ShyIcon;
