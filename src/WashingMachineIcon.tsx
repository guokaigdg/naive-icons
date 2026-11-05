import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WashingMachineIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="7" y="5" width="34" height="38" rx="4" fill="#FFFFFF"/>
<circle cx="24" cy="26" r="11" fill="#FAEDCD"/>
<circle cx="24" cy="26" r="6" fill="#2A9D8F" stroke="none"/>
<path d="M13 11 L35 11" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="33" cy="11" r="2" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

WashingMachineIcon.displayName = 'WashingMachineIcon';

export default WashingMachineIcon;
