import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HotelIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="12" y="8" width="24" height="34" rx="2" fill="#264653"/>
<rect x="16" y="14" width="5" height="6" fill="#E9C46A" stroke="none"/>
<rect x="27" y="14" width="5" height="6" fill="#E9C46A" stroke="none"/>
<rect x="16" y="24" width="5" height="6" fill="#E9C46A" stroke="none"/>
<rect x="27" y="24" width="5" height="6" fill="#E9C46A" stroke="none"/>
<path d="M20 42 L20 34 L28 34 L28 42" fill="#E76F51" stroke="none"/>
<path d="M8 42 L40 42" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>

    </svg>
  );
});

HotelIcon.displayName = 'HotelIcon';

export default HotelIcon;
