import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BridgeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M 4.8 21 C 14 17 34 17 43.2 21 L 43.2 36 L 33 36 A 9 9 0 0 0 15 36 L 4.8 36 Z" fill="#FAEDCD"/>
<path d="M 4.8 16 C 14 12 34 12 43.2 16" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M 12 14.2 L 12 18.8 M 24 12.5 L 24 17.6 M 36 14.2 L 36 18.8" stroke="#2A2A2A" strokeWidth={sw(2)} fill="none"/>
<path d="M 6 40 C 9.5 38 13 42 16.5 40" stroke="#2A9D8F" strokeWidth={sw(2)} fill="none"/>
<path d="M 26 40 C 29.5 38 33 42 36.5 40" stroke="#2A9D8F" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

BridgeIcon.displayName = 'BridgeIcon';

export default BridgeIcon;
