import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TimerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="26" r="14" fill="#E9C46A"/>
<rect x="19" y="6" width="10" height="6" rx="2" fill="#E76F51"/>
<path d="M24 26 L24 18" stroke="#FFFFFF" strokeWidth={sw(3)} fill="none"/>
<path d="M24 26 L30 30" stroke="#FFFFFF" strokeWidth={sw(3)} fill="none"/>
<path d="M17 26 L19 26 M29 26 L31 26" stroke="#8B5E3C" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

TimerIcon.displayName = 'TimerIcon';

export default TimerIcon;
