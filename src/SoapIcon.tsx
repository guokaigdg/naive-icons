import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SoapIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="7" y="24" width="34" height="15" rx="6" fill="#F4A6A4"/>
<circle cx="17" cy="15" r="4" fill="#FAEDCD"/>
<circle cx="26" cy="10" r="3" fill="#FAEDCD"/>
<circle cx="34" cy="15" r="2.5" fill="#FAEDCD"/>
<path d="M14 31 L34 31" stroke="#FFFFFF" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

SoapIcon.displayName = 'SoapIcon';

export default SoapIcon;
