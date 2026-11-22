import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ContextIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M7 11 H29 V25 H17 L11 31 V25 H7 Z" fill="#2A9D8F"/>
<path d="M19 21 H41 V35 H29 L23 41 V35 H19 Z" fill="#E9C46A"/>
<circle cx="14" cy="18" r="1.8" fill="#2A2A2A" stroke="none"/>
<circle cx="26" cy="28" r="1.8" fill="#2A2A2A" stroke="none"/>
<circle cx="33" cy="28" r="1.8" fill="#2A2A2A" stroke="none"/>

    </svg>
  );
});

ContextIcon.displayName = 'ContextIcon';

export default ContextIcon;
