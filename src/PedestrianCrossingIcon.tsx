import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PedestrianCrossingIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 6 L42 24 L24 42 L6 24 Z" fill="#E9C46A"/>
<circle cx="24" cy="15" r="3" fill="#264653" stroke="none"/>
<path d="M24 19 L24 27 M24 22 L19 25 M24 22 L29 25 M24 27 L20 34 M24 27 L28 34" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

PedestrianCrossingIcon.displayName = 'PedestrianCrossingIcon';

export default PedestrianCrossingIcon;
