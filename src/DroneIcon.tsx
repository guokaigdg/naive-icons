import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DroneIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="19" y="20" width="10" height="8" rx="2" fill="#264653"/>
<path d="M19 22 L12 15 M29 22 L36 15 M19 26 L12 33 M29 26 L36 33" strokeWidth={sw(2.5)}/>
<ellipse cx="10" cy="13" rx="6" ry="2.5" fill="#E76F51" stroke="none"/>
<ellipse cx="38" cy="13" rx="6" ry="2.5" fill="#E76F51" stroke="none"/>
<ellipse cx="10" cy="35" rx="6" ry="2.5" fill="#E76F51" stroke="none"/>
<ellipse cx="38" cy="35" rx="6" ry="2.5" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

DroneIcon.displayName = 'DroneIcon';

export default DroneIcon;
