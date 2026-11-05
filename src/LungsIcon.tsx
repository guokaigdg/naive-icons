import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LungsIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 8 V20"/>
<path d="M24 20 C20 18 14 22 12 30 C10 38 16 42 21 38 C24 35 24 30 24 26 Z" fill="#F4A6A4"/>
<path d="M24 20 C28 18 34 22 36 30 C38 38 32 42 27 38 C24 35 24 30 24 26 Z" fill="#F4A6A4"/>
<path d="M24 12 L20 15 M24 12 L28 15" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

LungsIcon.displayName = 'LungsIcon';

export default LungsIcon;
