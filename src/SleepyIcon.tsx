import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SleepyIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="22" cy="28" r="14" fill="#E9C46A"/>
<path d="M14 26 C16 29 19 29 21 26 M23 26 C25 29 28 29 30 26" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M30 16 L38 16 L30 24 L38 24" stroke="#2A9D8F" strokeWidth={sw(3)} fill="none"/>
<path d="M34 8 L39 8 L34 13 L39 13" stroke="#2A9D8F" strokeWidth={sw(2.5)} fill="none"/>
<path d="M19 34 C21 36 25 36 27 34" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

SleepyIcon.displayName = 'SleepyIcon';

export default SleepyIcon;
