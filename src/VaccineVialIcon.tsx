import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const VaccineVialIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="17" y="12" width="14" height="26" rx="3" fill="#FAEDCD"/>
<rect x="19" y="24" width="10" height="12" rx="1.5" fill="#2A9D8F" stroke="none"/>
<rect x="15" y="5" width="18" height="8" rx="2" fill="#E9C46A"/>
<path d="M19 16 H29" stroke="#264653" strokeWidth={sw(2)} fill="none"/>
<path d="M26 20 H29 M26 22.5 H29" stroke="#264653" strokeWidth={sw(1.5)} fill="none"/>

    </svg>
  );
});

VaccineVialIcon.displayName = 'VaccineVialIcon';

export default VaccineVialIcon;
