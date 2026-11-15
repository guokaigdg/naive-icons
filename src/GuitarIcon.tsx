import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GuitarIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M20.5 5.5 H27.5 V20 C 31 21 33 24 33 27.5 C 33 31 36 33 36 36.5 C 36 41 31 42.5 24 42.5 C 17 42.5 12 41 12 36.5 C 12 33 15 31 15 27.5 C 15 24 17 21 20.5 20 Z" fill="#E9C46A"/>
<rect x="19.5" y="5" width="9" height="4.5" rx="1.5" fill="#264653"/>
<path d="M19 6.5 H16.5 M29 6.5 H31.5" strokeWidth={sw(2.2)} fill="none"/>
<circle cx="24" cy="32" r="3.4" fill="#264653" stroke="none"/>
<rect x="21" y="38" width="6" height="2.6" fill="#264653" stroke="none"/>

    </svg>
  );
});

GuitarIcon.displayName = 'GuitarIcon';

export default GuitarIcon;
