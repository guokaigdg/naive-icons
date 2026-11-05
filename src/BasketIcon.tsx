import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BasketIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M10 20 L38 20 L35 40 L13 40 Z" fill="#E9C46A"/>
<path d="M8 20 L40 20" stroke="#2A2A2A" strokeWidth={sw(4)} fill="none"/>
<path d="M17 20 C17 10 31 10 31 20" stroke="#8B5E3C" fill="none"/>
<path d="M18 26 L18 36 M24 26 L24 36 M30 26 L30 36" stroke="#8B5E3C" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

BasketIcon.displayName = 'BasketIcon';

export default BasketIcon;
