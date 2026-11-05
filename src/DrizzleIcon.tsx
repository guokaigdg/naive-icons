import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DrizzleIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M13 26 C7 26 5 19 11 17 C11 10 20 8 24 13 C29 7 39 11 37 18 C43 19 42 26 36 26 Z" fill="#264653"/>
<path d="M15 32 L14 37 M24 32 L23 38 M33 32 L32 37" stroke="#2A9D8F" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

DrizzleIcon.displayName = 'DrizzleIcon';

export default DrizzleIcon;
