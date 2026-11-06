import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CalendarCheckIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="10" width="32" height="30" rx="4" fill="#FAEDCD"/>
<path d="M8 17 L40 17" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<path d="M15 7 L15 12 M33 7 L33 12" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M15 26 L20 31 L31 22" stroke="#2A9D8F" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

CalendarCheckIcon.displayName = 'CalendarCheckIcon';

export default CalendarCheckIcon;
