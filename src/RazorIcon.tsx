import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RazorIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M10 6 H38 C 40 6 41 8 41 10 C 41 12 40 14 38 14 H10 C 8 14 7 12 7 10 C 7 8 8 6 10 6 Z" fill="#264653"/>
<path d="M10.5 14.5 H37.5" stroke="#FAEDCD" strokeWidth={sw(2.2)} fill="none"/>
<path d="M24 14.5 V19.5" strokeWidth={sw(3.2)} fill="none"/>
<rect x="19" y="18.5" width="10" height="24.5" rx="5" fill="#2A9D8F"/>
<path d="M20.5 27 H27.5" stroke="#FAEDCD" strokeWidth={sw(2.2)} fill="none"/>

    </svg>
  );
});

RazorIcon.displayName = 'RazorIcon';

export default RazorIcon;
