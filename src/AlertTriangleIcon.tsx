import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const AlertTriangleIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 7 L43 40 L5 40 Z" fill="#E9C46A" stroke="#2A2A2A" strokeWidth={sw(3.5)}/>
<path d="M24 18 L24 30" fill="none" stroke="#2A2A2A" strokeWidth={sw(4)}/>
<circle cx="24" cy="35" r="2.2" fill="#2A2A2A"/>

    </svg>
  );
});

AlertTriangleIcon.displayName = 'AlertTriangleIcon';

export default AlertTriangleIcon;

