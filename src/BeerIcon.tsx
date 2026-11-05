import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BeerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M13 16 L35 16 L33 40 L15 40 Z" fill="#E9C46A"/>
<path d="M13 16 C13 10 20 8 24 12 C28 8 35 10 35 16 Z" fill="#FFFFFF"/>
<path d="M18 22 L18 34 M24 22 L24 34 M30 22 L30 34" stroke="#FFFFFF" strokeWidth={sw(2)} fill="none"/>
<circle cx="21" cy="27" r="1.5" fill="#E76F51" stroke="none"/>
<circle cx="27" cy="30" r="1.5" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

BeerIcon.displayName = 'BeerIcon';

export default BeerIcon;
