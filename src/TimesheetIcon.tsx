import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TimesheetIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="7" y="8" width="21" height="32" rx="3" fill="#FFFFFF"/>
<path d="M12 16 L23 16 M12 22 L23 22 M12 28 L22 28 M12 34 L19 34" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="32" cy="31" r="7" fill="#E9C46A"/>
<path d="M32 26 L32 31 L36 34" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

TimesheetIcon.displayName = 'TimesheetIcon';

export default TimesheetIcon;
