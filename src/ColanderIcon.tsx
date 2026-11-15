import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ColanderIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M10 22 C 10 34 16 40 24 40 C 32 40 38 34 38 22 Z" fill="#2A9D8F"/>
<path d="M9 22 L39 22" stroke="#2A2A2A" strokeWidth={sw(3.5)}/>
<path d="M9 23 C 5.5 23 5.5 27 8.5 27.5" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M39 23 C 42.5 23 42.5 27 39.5 27.5" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<circle cx="17" cy="27" r="1.5" fill="#FFFFFF" stroke="none"/>
<circle cx="24" cy="26" r="1.5" fill="#FFFFFF" stroke="none"/>
<circle cx="31" cy="27" r="1.5" fill="#FFFFFF" stroke="none"/>
<circle cx="20" cy="33" r="1.5" fill="#FFFFFF" stroke="none"/>
<circle cx="28" cy="33" r="1.5" fill="#FFFFFF" stroke="none"/>
<circle cx="24" cy="36.5" r="1.5" fill="#FFFFFF" stroke="none"/>

    </svg>
  );
});

ColanderIcon.displayName = 'ColanderIcon';

export default ColanderIcon;
