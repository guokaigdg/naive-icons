import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SmartphoneIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="13" y="6" width="22" height="36" rx="5" fill="#264653"/>
<rect x="16" y="10" width="16" height="26" rx="2" fill="#FAEDCD" stroke="none"/>
<path d="M20 8 L28 8" stroke="#FFFFFF" strokeWidth={sw(1.8)} fill="none"/>
<circle cx="24" cy="39" r="2" fill="#FAEDCD" stroke="none"/>

    </svg>
  );
});

SmartphoneIcon.displayName = 'SmartphoneIcon';

export default SmartphoneIcon;
