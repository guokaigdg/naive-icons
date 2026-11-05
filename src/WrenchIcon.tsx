import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WrenchIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M33 6 C 38 6 42 12 40 18 C 39 22 36 25 32 24 L29 20 L36 19 L38 14 L35 10 L31 13 Z" fill="#2A9D8F"/>
<path d="M29 22 L9 40 L6 37 L24 19 Z" fill="#8B5E3C"/>

    </svg>
  );
});

WrenchIcon.displayName = 'WrenchIcon';

export default WrenchIcon;
