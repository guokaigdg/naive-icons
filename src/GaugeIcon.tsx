import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GaugeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M7 34 A 17 17 0 0 1 41 34" fill="none" stroke="#2A2A2A" strokeWidth={sw(4)}/>
<path d="M11 34 L8 34 M14.8 24.8 L12.7 22.7 M24 21 L24 18 M33.2 24.8 L35.3 22.7 M37 34 L40 34" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M24 34 L32 26" stroke="#E76F51" strokeWidth={sw(4)}/>
<circle cx="24" cy="34" r="3.5" fill="#264653"/>

    </svg>
  );
});

GaugeIcon.displayName = 'GaugeIcon';

export default GaugeIcon;
