import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ElevatorIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="9" y="6" width="30" height="36" rx="2" fill="#264653"/>
<path d="M24 6 V42" stroke="#FAEDCD" strokeWidth={sw(2.5)}/>
<path d="M16 18 V30 M16 18 L13 21 M16 18 L19 21" stroke="#FAEDCD" strokeWidth={sw(2.5)} fill="none"/>
<path d="M32 30 V18 M32 30 L29 27 M32 30 L35 27" stroke="#FAEDCD" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

ElevatorIcon.displayName = 'ElevatorIcon';

export default ElevatorIcon;
