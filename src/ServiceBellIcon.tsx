import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ServiceBellIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="7" y="34.5" width="34" height="5.5" rx="2.75" fill="#264653"/>
<path d="M10 34.5 C 11 24 13 15.5 24 15.5 C 35 15.5 37 24 38 34.5 Z" fill="#E9C46A"/>
<circle cx="24" cy="12" r="3.2" fill="#E76F51"/>
<path d="M15.5 29 C 15.5 23.5 18.5 20 22 19" stroke="#FFFFFF" strokeWidth={sw(2.2)} fill="none"/>

    </svg>
  );
});

ServiceBellIcon.displayName = 'ServiceBellIcon';

export default ServiceBellIcon;
