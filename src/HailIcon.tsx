import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HailIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M10 24 C6 24 5 18 9 16 C9 10 18 8 21 12 C24 7 33 9 33 15 C38 15 39 20 36 23 Z" fill="#FAEDCD"/>
<circle cx="14" cy="31" r="2.5" fill="#2A9D8F" stroke="none"/>
<circle cx="24" cy="35" r="2.5" fill="#2A9D8F" stroke="none"/>
<circle cx="34" cy="31" r="2.5" fill="#2A9D8F" stroke="none"/>
<circle cx="20" cy="41" r="2.5" fill="#2A9D8F" stroke="none"/>

    </svg>
  );
});

HailIcon.displayName = 'HailIcon';

export default HailIcon;
