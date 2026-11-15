import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SodaIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M29 8 L26 20" stroke="#E76F51" strokeWidth={sw(3.2)}/>
<path d="M29 8 L26 20" stroke="#FAEDCD" strokeWidth={sw(1.2)}/>
<path d="M13.5 16 L34.5 16 L32 41 L16 41 Z" fill="#FAEDCD"/>
<path d="M14.6 23 L33.4 23 L32.2 38.5 L15.8 38.5 Z" fill="#E76F51"/>
<rect x="10.5" y="11" width="27" height="6.5" rx="3" fill="#264653"/>
<circle cx="20" cy="30" r="1.6" fill="#FAEDCD" stroke="none"/>
<circle cx="26" cy="34" r="1.3" fill="#FAEDCD" stroke="none"/>
<circle cx="28" cy="27" r="1.2" fill="#FAEDCD" stroke="none"/>

    </svg>
  );
});

SodaIcon.displayName = 'SodaIcon';

export default SodaIcon;
