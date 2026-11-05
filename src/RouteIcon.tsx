import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RouteIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M10 36 C 10 24 24 28 24 22 C 24 16 38 20 38 12" stroke="#2A9D8F" strokeWidth={sw(4)} fill="none"/>
<circle cx="10" cy="36" r="3.5" fill="#E76F51"/>
<circle cx="38" cy="12" r="3.5" fill="#E9C46A"/>

    </svg>
  );
});

RouteIcon.displayName = 'RouteIcon';

export default RouteIcon;
