import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HospitalBedIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="13" width="6" height="25" rx="2.5" fill="#264653"/>
<path d="M11 19 L11 25 M8.5 22 L13.5 22" stroke="#FAEDCD" strokeWidth={sw(2.5)} fill="none"/>
<rect x="12" y="26" width="28" height="8" rx="3.5" fill="#FAEDCD"/>
<rect x="15" y="21" width="7" height="6" rx="2" fill="#F4A6A4"/>
<rect x="24" y="25" width="15" height="7" rx="2.5" fill="#2A9D8F"/>
<path d="M15 34 L15 40 M37 34 L37 40" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

HospitalBedIcon.displayName = 'HospitalBedIcon';

export default HospitalBedIcon;
