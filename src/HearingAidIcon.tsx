import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HearingAidIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M22 10 C16 10 14 16 16 20 L18 26" stroke="#264653" strokeWidth={sw(3)} fill="none"/>
<circle cx="18" cy="29" r="4" fill="#E76F51"/>
<rect x="24" y="10" width="12" height="18" rx="4" fill="#264653"/>
<circle cx="30" cy="16" r="2" fill="#E9C46A" stroke="none"/>
<path d="M26 24 L34 24" stroke="#E9C46A" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

HearingAidIcon.displayName = 'HearingAidIcon';

export default HearingAidIcon;
