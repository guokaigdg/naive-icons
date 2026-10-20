import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RainbowIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8.82 32.93 A 15.18 15.18 0 0 1 39.18 32.93" stroke="#E76F51" strokeWidth={sw(4.5)} fill="none"/>
<path d="M13.73 32.93 A 10.27 10.27 0 0 1 34.27 32.93" stroke="#E9C46A" strokeWidth={sw(4.5)} fill="none"/>
<path d="M18.64 32.93 A 5.36 5.36 0 0 1 29.36 32.93" stroke="#2A9D8F" strokeWidth={sw(4.5)} fill="none"/>
<circle cx="7.93" cy="35.61" r="3.13" fill="#FAEDCD"/>
<circle cx="12.39" cy="36.95" r="2.68" fill="#FAEDCD"/>
<circle cx="40.07" cy="35.61" r="3.13" fill="#FAEDCD"/>
<circle cx="35.61" cy="36.95" r="2.68" fill="#FAEDCD"/>

    </svg>
  );
});

RainbowIcon.displayName = 'RainbowIcon';

export default RainbowIcon;
