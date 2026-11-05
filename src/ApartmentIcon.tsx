import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ApartmentIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="9" y="8" width="30" height="33" rx="2" fill="#FAEDCD"/>
<path d="M9 16 L39 16 M9 25 L39 25 M9 34 L39 34" stroke="#264653" strokeWidth={sw(2)} fill="none"/>
<rect x="13" y="11" width="6" height="4" fill="#2A9D8F" stroke="none"/>
<rect x="22" y="11" width="6" height="4" fill="#2A9D8F" stroke="none"/>
<rect x="31" y="11" width="5" height="4" fill="#2A9D8F" stroke="none"/>
<rect x="13" y="20" width="6" height="4" fill="#2A9D8F" stroke="none"/>
<rect x="22" y="20" width="6" height="4" fill="#2A9D8F" stroke="none"/>
<rect x="31" y="20" width="5" height="4" fill="#2A9D8F" stroke="none"/>
<path d="M9 41 L39 41" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

ApartmentIcon.displayName = 'ApartmentIcon';

export default ApartmentIcon;
