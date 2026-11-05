import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WheelchairIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="10" r="4" fill="#264653"/>
<path d="M24 16 L24 27 L33 27 L36 36" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>
<circle cx="23" cy="31" r="9" fill="#FAEDCD"/>
<path d="M23 31 L23 22 M23 31 L31 36" stroke="#2A9D8F" strokeWidth={sw(2.5)} fill="none"/>
<path d="M32 31 L40 31" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

WheelchairIcon.displayName = 'WheelchairIcon';

export default WheelchairIcon;
