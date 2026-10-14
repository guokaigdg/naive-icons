import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CarIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M6 22 L13 22 L17 13 L31 13 L35 22 L42 22 L42 30 L6 30 Z" fill="#E76F51"/>
<path d="M18 21 L19.5 15.5 L28.5 15.5 L30 21 Z" fill="#FAEDCD" stroke="none"/>
<circle cx="15" cy="32.5" r="4.5" fill="#264653"/>
<circle cx="33" cy="32.5" r="4.5" fill="#264653"/>
<circle cx="15" cy="32.5" r="1.6" fill="#FAEDCD" stroke="none"/>
<circle cx="33" cy="32.5" r="1.6" fill="#FAEDCD" stroke="none"/>
<circle cx="38.5" cy="26" r="1.8" fill="#E9C46A" stroke="none"/>

    </svg>
  );
});

CarIcon.displayName = 'CarIcon';

export default CarIcon;
