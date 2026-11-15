import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ScarfIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="14.5" y="12" width="9.5" height="21" rx="2" fill="#E76F51"/>
<rect x="25" y="12" width="9.5" height="27" rx="2" fill="#E76F51"/>
<path d="M9 8 C 9 4.5 39 4.5 39 8 V10.5 C 39 14 9 14 9 10.5 Z" fill="#E76F51"/>
<path d="M16 25 H23 M27 31 H34" stroke="#FAEDCD" strokeWidth={sw(2.4)} fill="none"/>
<path d="M17 33 V36.5 M21 33 V36.5 M27.5 39 V42.5 M31.5 39 V42.5" strokeWidth={sw(2.2)} fill="none"/>

    </svg>
  );
});

ScarfIcon.displayName = 'ScarfIcon';

export default ScarfIcon;
