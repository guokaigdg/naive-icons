import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MicroscopeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="10" y="38" width="26" height="4" rx="2" fill="#264653"/>
<rect x="14" y="30" width="18" height="4" rx="2" fill="#E9C46A"/>
<path d="M28 30 L31 24 L31 14" stroke="#2A9D8F" strokeWidth={sw(5)} fill="none"/>
<rect x="26" y="6" width="10" height="6" rx="2" fill="#E76F51"/>
<rect x="27" y="12" width="8" height="9" rx="3" fill="#264653"/>
<circle cx="31" cy="24" r="1.8" fill="#FAEDCD" stroke="none"/>

    </svg>
  );
});

MicroscopeIcon.displayName = 'MicroscopeIcon';

export default MicroscopeIcon;
