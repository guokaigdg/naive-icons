import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CalendarPlusIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="11" width="32" height="29" rx="4" fill="#FAEDCD"/>
<path d="M8 19 L40 19" stroke="#2A2A2A" strokeWidth={sw(3)}/>
<rect x="8" y="11" width="32" height="8" fill="#E76F51"/>
<path d="M16 7 L16 15 M32 7 L32 15" stroke="#2A2A2A" strokeWidth={sw(3)}/>
<path d="M24 25 L24 35 M19 30 L29 30" stroke="#2A9D8F" strokeWidth={sw(4)} fill="none"/>

    </svg>
  );
});

CalendarPlusIcon.displayName = 'CalendarPlusIcon';

export default CalendarPlusIcon;
