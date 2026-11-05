import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RangeHoodIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 14 L40 14 L36 30 L12 30 Z" fill="#264653"/>
<path d="M6 34 L42 34" stroke="#264653" strokeWidth={sw(3)} fill="none"/>
<path d="M18 30 L18 34 M24 30 L24 34 M30 30 L30 34" stroke="#2A9D8F" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="24" cy="22" r="2" fill="#E9C46A" stroke="none"/>

    </svg>
  );
});

RangeHoodIcon.displayName = 'RangeHoodIcon';

export default RangeHoodIcon;
