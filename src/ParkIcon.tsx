import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ParkIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="18" cy="16" r="9" fill="#588157"/>
<rect x="15" y="24" width="5" height="14" fill="#8B5E3C" stroke="none"/>
<rect x="28" y="30" width="12" height="4" rx="1" fill="#E76F51" stroke="none"/>
<rect x="28" y="35" width="12" height="3" rx="1" fill="#E76F51" stroke="none"/>
<path d="M30 38 V41 M38 38 V41" strokeWidth={sw(2)}/>
<path d="M6 41 H42" strokeWidth={sw(2.5)}/>

    </svg>
  );
});

ParkIcon.displayName = 'ParkIcon';

export default ParkIcon;
