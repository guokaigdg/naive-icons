import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WatermelonIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M5 14.5 A19 19 0 0 0 43 14.5 Z" fill="#588157" stroke="none"/>
<path d="M10 14.5 A14 14 0 0 0 38 14.5 Z" fill="#FAEDCD" stroke="none"/>
<path d="M13.5 14.5 A10.5 10.5 0 0 0 34.5 14.5 Z" fill="#E76F51" stroke="none"/>
<path d="M5 14.5 A19 19 0 0 0 43 14.5 Z" fill="none"/>
<path d="M10 14.5 A14 14 0 0 0 38 14.5" fill="none" strokeWidth={sw(2.2)}/>
<path d="M13.5 14.5 A10.5 10.5 0 0 0 34.5 14.5" fill="none" strokeWidth={sw(2.2)}/>
<circle cx="19" cy="18.5" r="1.05" fill="#2A2A2A" stroke="none"/>
<circle cx="24" cy="18.5" r="1.05" fill="#2A2A2A" stroke="none"/>
<circle cx="29" cy="18.5" r="1.05" fill="#2A2A2A" stroke="none"/>
<circle cx="21" cy="22" r="1.05" fill="#2A2A2A" stroke="none"/>
<circle cx="27" cy="22" r="1.05" fill="#2A2A2A" stroke="none"/>

    </svg>
  );
});

WatermelonIcon.displayName = 'WatermelonIcon';

export default WatermelonIcon;
