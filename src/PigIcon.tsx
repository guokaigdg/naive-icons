import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PigIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="26" r="13" fill="#F4A6A4"/>
<path d="M13 16 L11 8 L20 14 Z" fill="#F4A6A4"/>
<path d="M35 16 L37 8 L28 14 Z" fill="#F4A6A4"/>
<ellipse cx="24" cy="31" rx="6" ry="4.5" fill="#E76F51"/>
<circle cx="22" cy="31" r="1.2" fill="#2A2A2A" stroke="none"/>
<circle cx="26" cy="31" r="1.2" fill="#2A2A2A" stroke="none"/>
<circle cx="19" cy="22" r="1.8" fill="#2A2A2A" stroke="none"/>
<circle cx="29" cy="22" r="1.8" fill="#2A2A2A" stroke="none"/>

    </svg>
  );
});

PigIcon.displayName = 'PigIcon';

export default PigIcon;
