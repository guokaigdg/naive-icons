import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const AlarmClockIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="13" cy="10" r="4.5" fill="#E76F51"/>
<circle cx="35" cy="10" r="4.5" fill="#E76F51"/>
<circle cx="24" cy="27" r="13" fill="#E9C46A"/>
<path d="M24 19 L24 27 L30 31" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M14 37 L10 42 M34 37 L38 42" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

AlarmClockIcon.displayName = 'AlarmClockIcon';

export default AlarmClockIcon;
