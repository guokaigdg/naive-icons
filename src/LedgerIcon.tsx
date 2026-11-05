import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LedgerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="7" y="6" width="34" height="36" rx="3" fill="#264653"/>
<path d="M16 6 L16 42" stroke="#FAEDCD" strokeWidth={sw(3)} fill="none"/>
<path d="M21 14 L35 14 M21 21 L35 21 M21 28 L32 28 M21 35 L28 35" stroke="#FAEDCD" strokeWidth={sw(2.5)} fill="none"/>
<path d="M10 12 L13 12 M10 20 L13 20 M10 28 L13 28 M10 36 L13 36" stroke="#E9C46A" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

LedgerIcon.displayName = 'LedgerIcon';

export default LedgerIcon;
