import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TicketIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M6 14 L42 14 L42 20 C 37 22 37 30 42 32 L42 38 L6 38 L6 32 C 11 30 11 22 6 20 Z" fill="#E9C46A"/>
<path d="M16 17 L16 35" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="21" cy="26" r="3.2" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

TicketIcon.displayName = 'TicketIcon';

export default TicketIcon;
