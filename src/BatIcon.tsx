import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BatIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 13 L28 27 L24 33 L20 27 Z" fill="#264653"/>
<path d="M23 21 C17 12 9 13 6 21 C11 19 14 22 12 27 C17 25 21 28 23 33 Z" fill="#264653"/>
<path d="M25 21 C31 12 39 13 42 21 C37 19 34 22 36 27 C31 25 27 28 25 33 Z" fill="#264653"/>
<path d="M20 14 L18 9 L23 12 M28 14 L30 9 L25 12" fill="#264653"/>

    </svg>
  );
});

BatIcon.displayName = 'BatIcon';

export default BatIcon;
