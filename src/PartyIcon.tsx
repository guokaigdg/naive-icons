import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PartyIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 6 L33 18 L15 18 Z" fill="#E76F51"/>
<circle cx="24" cy="28" r="12" fill="#E9C46A"/>
<circle cx="20" cy="27" r="1.8" fill="#2A2A2A" stroke="none"/>
<circle cx="28" cy="27" r="1.8" fill="#2A2A2A" stroke="none"/>
<path d="M20 32 C22 35 26 35 28 32" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="9" cy="20" r="1.5" fill="#2A9D8F" stroke="none"/>
<circle cx="39" cy="16" r="1.5" fill="#E76F51" stroke="none"/>
<circle cx="38" cy="28" r="1.5" fill="#2A9D8F" stroke="none"/>

    </svg>
  );
});

PartyIcon.displayName = 'PartyIcon';

export default PartyIcon;
