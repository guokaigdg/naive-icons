import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CricketIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M12.8 37.1 L23 18.7 L33.4 24.6 L23.2 42.9 Z" fill="#E9C46A"/>
<path d="M25.9 22.9 L30.7 11.7 L35.3 14.3 L30.5 20.4 Z" fill="#8B5E3C"/>
<path d="M29.3 14.3 L33.8 16.9 M27.8 16.9 L32.3 19.5" stroke="#FAEDCD" strokeWidth={sw(1.6)} fill="none"/>
<circle cx="13" cy="18" r="6.5" fill="#E76F51"/>
<path d="M13 11.8 C 9.5 15 9.5 21 13 24.2" stroke="#FFFFFF" strokeWidth={sw(1.8)} fill="none"/>

    </svg>
  );
});

CricketIcon.displayName = 'CricketIcon';

export default CricketIcon;
