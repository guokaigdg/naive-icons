import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GraterIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M14 11 L34 11 L38 38 L10 38 Z" fill="#FFFFFF"/>
<path d="M17 11 C 17 7.5 31 7.5 31 11" fill="none"/>
<circle cx="18" cy="19" r="1.5" fill="#2A2A2A" stroke="none"/>
<circle cx="24" cy="19" r="1.5" fill="#2A2A2A" stroke="none"/>
<circle cx="30" cy="19" r="1.5" fill="#2A2A2A" stroke="none"/>
<circle cx="17" cy="26" r="1.5" fill="#2A2A2A" stroke="none"/>
<circle cx="24" cy="26" r="1.5" fill="#2A2A2A" stroke="none"/>
<circle cx="31" cy="26" r="1.5" fill="#2A2A2A" stroke="none"/>
<circle cx="16" cy="33" r="1.5" fill="#2A2A2A" stroke="none"/>
<circle cx="24" cy="33" r="1.5" fill="#2A2A2A" stroke="none"/>
<circle cx="32" cy="33" r="1.5" fill="#2A2A2A" stroke="none"/>

    </svg>
  );
});

GraterIcon.displayName = 'GraterIcon';

export default GraterIcon;
