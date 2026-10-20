import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FlagIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M13.28 7.03 L 13.28 40.97" stroke="#2A2A2A" strokeWidth={sw(3.5)}/>
<path d="M13.28 9.71 C 19.53 6.14 25.79 13.28 32.04 9.71 L 32.04 22.21 C 25.79 25.79 19.53 18.64 13.28 22.21 Z" fill="#E76F51"/>
<circle cx="13.28" cy="7.03" r="2.23" fill="#E9C46A"/>

    </svg>
  );
});

FlagIcon.displayName = 'FlagIcon';

export default FlagIcon;
