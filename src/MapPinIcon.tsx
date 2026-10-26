import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MapPinIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 12 L 18 8 L 30 12 L 40 8 L 40 34 L 30 38 L 18 34 L 8 38 Z" fill="#FAEDCD"/>
<path d="M18 8 L 18 34" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M30 12 L 30 38" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M12 30 C 15 23 21 28 24 21 C 26 17 29 18 31 16" stroke="#E76F51" strokeWidth={sw(2.5)} fill="none"/>
<g transform="translate(11 2) scale(0.7)"><path d="M30 5 C 25.8 5 22.8 8 22.8 12 C 22.8 16.4 30 23 30 23 C 30 23 37.2 16.4 37.2 12 C 37.2 8 34.2 5 30 5 Z" fill="#E76F51"/><circle cx="30" cy="11.6" r="2.3" fill="#FFFFFF" stroke="none"/></g>

    </svg>
  );
});

MapPinIcon.displayName = 'MapPinIcon';

export default MapPinIcon;
