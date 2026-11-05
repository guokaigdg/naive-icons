import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DropletIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 6 C 24 6 12 20 12 28 C 12 35 17 40 24 40 C 31 40 36 35 36 28 C 36 20 24 6 24 6 Z" fill="#2A9D8F"/>
<path d="M19 26 C 19 31 21 34 24 35" stroke="#FFFFFF" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

DropletIcon.displayName = 'DropletIcon';

export default DropletIcon;
