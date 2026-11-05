import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ScannerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="23" width="36" height="13" rx="3" fill="#264653"/>
<rect x="10" y="11" width="28" height="9" rx="2" fill="#FAEDCD"/>
<path d="M14 7 L34 7" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M11 29 L37 29" stroke="#2A9D8F" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="35" cy="33" r="2" fill="#E9C46A" stroke="none"/>

    </svg>
  );
});

ScannerIcon.displayName = 'ScannerIcon';

export default ScannerIcon;
