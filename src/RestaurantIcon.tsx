import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RestaurantIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M13 8 L13 16 C13 20 19 20 19 16 L19 8" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>
<path d="M16 8 L16 40" stroke="#2A2A2A" strokeWidth={sw(4)} fill="none"/>
<path d="M10 8 L10 14 M22 8 L22 14" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M31 8 L31 40" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>
<path d="M31 8 C37 12 37 22 31 24 Z" fill="#E9C46A"/>

    </svg>
  );
});

RestaurantIcon.displayName = 'RestaurantIcon';

export default RestaurantIcon;
