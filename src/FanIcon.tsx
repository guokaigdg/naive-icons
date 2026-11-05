import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FanIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="20" r="13" fill="#FAEDCD"/>
<path d="M24 20 C21 15 24 8.5 27.5 8 C31 12 29 17 24 20 Z" fill="#2A9D8F" stroke="none"/>
<path d="M24 20 C21 15 24 8.5 27.5 8 C31 12 29 17 24 20 Z" fill="#2A9D8F" stroke="none" transform="rotate(120 24 20)"/>
<path d="M24 20 C21 15 24 8.5 27.5 8 C31 12 29 17 24 20 Z" fill="#2A9D8F" stroke="none" transform="rotate(240 24 20)"/>
<circle cx="24" cy="20" r="2.6" fill="#264653" stroke="none"/>
<path d="M24 33 L24 41 M18 41 L30 41" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>

    </svg>
  );
});

FanIcon.displayName = 'FanIcon';

export default FanIcon;
