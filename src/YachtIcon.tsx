import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const YachtIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M5 29 H43 L37 38 C 29 39.5 17 39.5 12 38 Z" fill="#FAEDCD"/>
<path d="M9 32.5 H39" stroke="#E76F51" strokeWidth={sw(3)} fill="none"/>
<rect x="15" y="20" width="16" height="9" rx="2" fill="#264653"/>
<rect x="17.5" y="22.5" width="4" height="3.5" fill="#FAEDCD" stroke="none"/>
<rect x="23" y="22.5" width="4" height="3.5" fill="#FAEDCD" stroke="none"/>
<path d="M24 20 L24 12" stroke="#2A2A2A" strokeWidth={sw(2.8)} fill="none"/>
<path d="M24 12 L33 14.5 L24 17 Z" fill="#E76F51"/>

    </svg>
  );
});

YachtIcon.displayName = 'YachtIcon';

export default YachtIcon;
