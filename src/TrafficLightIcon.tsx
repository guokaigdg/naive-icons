import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TrafficLightIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="14" y="6" width="20" height="34" rx="6" fill="#264653"/>
<circle cx="24" cy="14" r="5" fill="#E76F51" stroke="none"/>
<circle cx="24" cy="23" r="5" fill="#E9C46A" stroke="none"/>
<circle cx="24" cy="32" r="5" fill="#588157" stroke="none"/>
<path d="M24 40 L24 42" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

TrafficLightIcon.displayName = 'TrafficLightIcon';

export default TrafficLightIcon;
