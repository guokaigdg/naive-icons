import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GasStationIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M6 40 L42 40" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<rect x="7" y="14" width="20" height="26" rx="3" fill="#E76F51"/>
<path d="M11 20 L23 20" stroke="#FAEDCD" strokeWidth={sw(2.5)} fill="none"/>
<path d="M27 20 C34 20 36 24 34 28 L30 34" stroke="#264653" strokeWidth={sw(3)} fill="none"/>
<rect x="28" y="34" width="9" height="6" rx="2" fill="#264653"/>

    </svg>
  );
});

GasStationIcon.displayName = 'GasStationIcon';

export default GasStationIcon;
