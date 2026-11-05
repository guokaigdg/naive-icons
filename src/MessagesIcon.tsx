import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MessagesIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M6 14 L30 14 L30 30 L20 30 L16 36 L16 30 L6 30 Z" fill="#E76F51"/>
<path d="M18 8 L42 8 L42 26 L34 26 L30 32 L30 26 L18 26 Z" fill="#FAEDCD"/>
<circle cx="25" cy="17" r="1.8" fill="#2A2A2A" stroke="none"/>
<circle cx="32" cy="17" r="1.8" fill="#2A2A2A" stroke="none"/>
<circle cx="39" cy="17" r="1.8" fill="#2A2A2A" stroke="none"/>

    </svg>
  );
});

MessagesIcon.displayName = 'MessagesIcon';

export default MessagesIcon;
