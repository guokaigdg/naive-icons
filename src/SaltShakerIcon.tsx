import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SaltShakerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M15 20 C 15 17.5 33 17.5 33 20 L34 37 C 34 40 14 40 14 37 Z" fill="#FAEDCD"/>
<rect x="14.5" y="12" width="19" height="8" rx="3" fill="#264653"/>
<circle cx="20" cy="15.5" r="1.3" fill="#FAEDCD" stroke="none"/>
<circle cx="24" cy="14.8" r="1.3" fill="#FAEDCD" stroke="none"/>
<circle cx="28" cy="15.5" r="1.3" fill="#FAEDCD" stroke="none"/>
<path d="M16.5 24 L31.5 24 M17.5 30 L30.5 30" stroke="#FFFFFF" strokeWidth={sw(2)}/>

    </svg>
  );
});

SaltShakerIcon.displayName = 'SaltShakerIcon';

export default SaltShakerIcon;
