import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CrabIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="13" cy="15" r="5" fill="#E76F51"/>
<circle cx="35" cy="15" r="5" fill="#E76F51"/>
<circle cx="24" cy="27" r="10.5" fill="#E76F51"/>
<path d="M14 16 L18 11" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M34 16 L30 11" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M15 34 L10 41" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M33 34 L38 41" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M21 36 L19 43" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M27 36 L29 43" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<circle cx="20" cy="25" r="1.7" fill="#FFFFFF" stroke="none"/>
<circle cx="28" cy="25" r="1.7" fill="#FFFFFF" stroke="none"/>

    </svg>
  );
});

CrabIcon.displayName = 'CrabIcon';

export default CrabIcon;
