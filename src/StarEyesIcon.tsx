import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const StarEyesIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
<path d="M18 15.5 L19.4 19.1 L23 20.5 L19.4 21.9 L18 25.5 L16.6 21.9 L13 20.5 L16.6 19.1 Z" fill="#E76F51" stroke="none"/>
<path d="M30 15.5 L31.4 19.1 L35 20.5 L31.4 21.9 L30 25.5 L28.6 21.9 L25 20.5 L28.6 19.1 Z" fill="#E76F51" stroke="none"/>
<path d="M17 31 C 20 35 28 35 31 31" stroke="#2A2A2A" strokeWidth={sw(2.6)} fill="none"/>

    </svg>
  );
});

StarEyesIcon.displayName = 'StarEyesIcon';

export default StarEyesIcon;
