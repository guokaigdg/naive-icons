import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const JoystickIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="15" r="5.5" fill="#E76F51"/>
<path d="M24 20 L24 28" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>
<path d="M9 32 C9 28.5 14 26.5 24 26.5 C34 26.5 39 28.5 39 32 L39 36 C39 39.5 9 39.5 9 36 Z" fill="#264653"/>
<circle cx="24" cy="33" r="2.6" fill="#E9C46A" stroke="none"/>

    </svg>
  );
});

JoystickIcon.displayName = 'JoystickIcon';

export default JoystickIcon;
