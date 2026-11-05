import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MotorcycleIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="12" cy="34" r="7" fill="#264653"/>
<circle cx="36" cy="34" r="7" fill="#264653"/>
<circle cx="12" cy="34" r="2.2" fill="#FAEDCD" stroke="none"/>
<circle cx="36" cy="34" r="2.2" fill="#FAEDCD" stroke="none"/>
<path d="M12 34 L18 24 L30 24 L36 34 L28 34 L24 28 Z" fill="#E76F51"/>
<path d="M30 22 L38 18" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M16 22 L24 22" stroke="#264653" strokeWidth={sw(4)} fill="none"/>

    </svg>
  );
});

MotorcycleIcon.displayName = 'MotorcycleIcon';

export default MotorcycleIcon;
