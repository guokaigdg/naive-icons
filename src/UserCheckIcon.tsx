import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const UserCheckIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="19" cy="15" r="8" fill="#E76F51"/>
<path d="M5 42 C 5 33 11 29 19 29 C 24 29 28 31 30 34 L 30 42 Z" fill="#2A9D8F"/>
<circle cx="34" cy="33" r="9" fill="#588157"/>
<path d="M30 33 L33 36 L38 30" stroke="#FFFFFF" strokeWidth={sw(2.8)} fill="none"/>

    </svg>
  );
});

UserCheckIcon.displayName = 'UserCheckIcon';

export default UserCheckIcon;
