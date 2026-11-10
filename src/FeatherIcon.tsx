import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FeatherIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M 36 10 C 30 8 22 12 17 20 C 13 26 11 33 10 38 C 15 37 22 34 27 27 C 32 20 36 14 36 10 Z" fill="#FAEDCD"/>
<path d="M 10.5 37.5 C 17 32 26 24 34.5 12" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M 10.5 37.5 C 9 39.5 8 41 7 42.5" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M 16 31.5 L 20.5 35" stroke="#2A2A2A" strokeWidth={sw(1.8)} fill="none"/>
<path d="M 21.5 25 L 26 28.5" stroke="#2A2A2A" strokeWidth={sw(1.8)} fill="none"/>
<path d="M 27 18.5 L 31 21.5" stroke="#2A2A2A" strokeWidth={sw(1.8)} fill="none"/>
<path d="M 17 29.5 L 13.5 27" stroke="#2A2A2A" strokeWidth={sw(1.8)} fill="none"/>
<path d="M 22.5 23 L 19.5 20" stroke="#2A2A2A" strokeWidth={sw(1.8)} fill="none"/>

    </svg>
  );
});

FeatherIcon.displayName = 'FeatherIcon';

export default FeatherIcon;
