import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const StethoscopeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M14 8 C 12 18 15 26 21 29 C 26 31 30 30 31 26" stroke="#2A9D8F" strokeWidth={sw(4)} fill="none"/>
<path d="M33 8 C 35 15 34 21 30 24" stroke="#2A9D8F" strokeWidth={sw(4)} fill="none"/>
<circle cx="14" cy="8" r="2.5" fill="#2A9D8F" stroke="none"/>
<circle cx="33" cy="8" r="2.5" fill="#2A9D8F" stroke="none"/>
<circle cx="33" cy="31" r="6" fill="#E76F51"/>
<circle cx="33" cy="31" r="2" fill="#FAEDCD" stroke="none"/>

    </svg>
  );
});

StethoscopeIcon.displayName = 'StethoscopeIcon';

export default StethoscopeIcon;
