import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BarberIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="8" r="2.5" fill="#264653" stroke="none"/>
<rect x="20" y="10" width="8" height="28" rx="4" fill="#FFFFFF"/>
<path d="M20 16 L28 12 M20 24 L28 20 M20 32 L28 28" stroke="#E76F51" strokeWidth={sw(3)} fill="none"/>
<path d="M15 40 H33" strokeWidth={sw(3)}/>

    </svg>
  );
});

BarberIcon.displayName = 'BarberIcon';

export default BarberIcon;
