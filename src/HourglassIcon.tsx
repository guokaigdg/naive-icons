import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HourglassIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M12 8 L36 8 L25 24 L36 40 L12 40 L23 24 Z" fill="#FAEDCD"/>
<path d="M16.5 12 L31.5 12 L25 22 Z" fill="#E9C46A" stroke="none"/>
<path d="M17 36 L31 36 L25 28 Z" fill="#E9C46A" stroke="none"/>
<path d="M11 8 L37 8" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>
<path d="M11 40 L37 40" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>

    </svg>
  );
});

HourglassIcon.displayName = 'HourglassIcon';

export default HourglassIcon;
