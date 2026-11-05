import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ShipIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M6 30 L42 30 L36 40 L12 40 Z" fill="#264653"/>
<path d="M24 8 L24 30" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M22 10 L10 26 L22 26 Z" fill="#E76F51"/>
<path d="M26 10 L38 26 L26 26 Z" fill="#FAEDCD"/>
<path d="M8 34 L40 34" stroke="#2A9D8F" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

ShipIcon.displayName = 'ShipIcon';

export default ShipIcon;
