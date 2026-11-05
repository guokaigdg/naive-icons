import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PiggyBankIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<ellipse cx="23" cy="27" rx="14" ry="10" fill="#F4A6A4"/>
<path d="M14 18 L13 10 L21 15 Z" fill="#F4A6A4"/>
<ellipse cx="35" cy="27" rx="4" ry="3" fill="#F4A6A4"/>
<circle cx="34" cy="26" r="1" fill="#264653" stroke="none"/>
<circle cx="36.5" cy="26" r="1" fill="#264653" stroke="none"/>
<path d="M20 18 L28 18" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<path d="M13 36 L13 41 M21 37 L21 41 M28 37 L28 41" stroke="#F4A6A4" strokeWidth={sw(3.5)} fill="none"/>
<path d="M9 23 C5 22 5 18 8 17" stroke="#F4A6A4" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="30" cy="23" r="1.6" fill="#2A2A2A" stroke="none"/>

    </svg>
  );
});

PiggyBankIcon.displayName = 'PiggyBankIcon';

export default PiggyBankIcon;
