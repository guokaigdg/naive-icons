import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SockIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M18 8 H30 V25 C 30 29 32 31 36 33 C 40 35 40 41 35 42 C 28 43 22 39 19.5 33 C 18.5 30 18 27 18 24 Z" fill="#F4A6A4"/>
<rect x="15.5" y="5" width="17" height="8" rx="2.5" fill="#E9C46A"/>
<path d="M15.5 9.5 H32.5" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

SockIcon.displayName = 'SockIcon';

export default SockIcon;
