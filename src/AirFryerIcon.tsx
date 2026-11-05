import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const AirFryerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="12" y="8" width="24" height="34" rx="6" fill="#264653"/>
<rect x="17" y="14" width="14" height="9" rx="2" fill="#E9C46A" stroke="none"/>
<rect x="16" y="28" width="16" height="10" rx="2" fill="#E76F51"/>
<path d="M21 33 H27" stroke="#FAEDCD" strokeWidth={sw(2)}/>

    </svg>
  );
});

AirFryerIcon.displayName = 'AirFryerIcon';

export default AirFryerIcon;
