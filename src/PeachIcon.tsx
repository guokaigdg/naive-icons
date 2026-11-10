import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PeachIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M 24 15 C 21 11 16 10 12 13 C 7 16 7 23 9 29 C 12 36 18 40 24 40 C 30 40 36 36 39 29 C 41 23 41 16 36 13 C 32 10 27 11 24 15 Z" fill="#F4A6A4"/>
<path d="M 24 16 C 23.5 20 23.5 24 24 27" stroke="#2A2A2A" strokeWidth={sw(2)} fill="none"/>
<path d="M 24.5 14 C 26 9 31 5 37 5.5 C 38 11 33 15 24.5 14 Z" fill="#588157"/>
<path d="M 24 14 C 24 11 23 9 23 8" stroke="#8B5E3C" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

PeachIcon.displayName = 'PeachIcon';

export default PeachIcon;
