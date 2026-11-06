import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CargoShipIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M6 30 L42 30 L37 40 L11 40 Z" fill="#264653"/>
<rect x="11" y="20" width="8" height="8" fill="#E76F51"/>
<rect x="21" y="20" width="8" height="8" fill="#2A9D8F"/>
<rect x="31" y="22" width="7" height="6" fill="#E9C46A"/>
<path d="M9 30 L39 30" stroke="#FAEDCD" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

CargoShipIcon.displayName = 'CargoShipIcon';

export default CargoShipIcon;
