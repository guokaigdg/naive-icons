import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LanternIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 4.6 V7" strokeWidth={sw(2.6)} fill="none"/>
<rect x="14.5" y="10.5" width="19" height="4.5" rx="1.5" fill="#E9C46A"/>
<path d="M18 15.5 H30 C 35 18 35 30 30 32.5 H18 C 13 30 13 18 18 15.5 Z" fill="#E76F51"/>
<path d="M24 16 V32" stroke="#E9C46A" strokeWidth={sw(2)} fill="none"/>
<path d="M19 17 C 17.2 20.5 17.2 27.5 19 31" stroke="#E9C46A" strokeWidth={sw(2)} fill="none"/>
<path d="M29 17 C 30.8 20.5 30.8 27.5 29 31" stroke="#E9C46A" strokeWidth={sw(2)} fill="none"/>
<rect x="15.5" y="32" width="17" height="4" rx="1.5" fill="#E9C46A"/>
<path d="M24 36 V39.5" strokeWidth={sw(2.6)} fill="none"/>
<path d="M21 39.5 H27 L26 44 H22 Z" fill="#E76F51" strokeWidth={sw(2)}/>

    </svg>
  );
});

LanternIcon.displayName = 'LanternIcon';

export default LanternIcon;
