import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CinemaIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="12" width="36" height="28" rx="2" fill="#264653"/>
<rect x="12" y="24" width="24" height="11" fill="#FAEDCD" stroke="none"/>
<path d="M18 24 L18 35 M24 24 L24 35 M30 24 L30 35" stroke="#264653" strokeWidth={sw(1.8)} fill="none"/>
<circle cx="12" cy="16" r="1.5" fill="#E9C46A" stroke="none"/>
<circle cx="24" cy="16" r="1.5" fill="#E9C46A" stroke="none"/>
<circle cx="36" cy="16" r="1.5" fill="#E9C46A" stroke="none"/>

    </svg>
  );
});

CinemaIcon.displayName = 'CinemaIcon';

export default CinemaIcon;
