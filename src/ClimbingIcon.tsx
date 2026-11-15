import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ClimbingIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M43 6 L43 43 L26 43 L29.5 37 L26.5 31 L30 25 L26.5 19 L29.5 13 L26.5 7.5 Z" fill="#8B5E3C"/>
<circle cx="21" cy="14" r="3.6" fill="#E76F51"/>
<path d="M20.5 19 L18.5 27" strokeWidth={sw(3.5)} fill="none"/>
<path d="M20.5 20 L26.5 16" strokeWidth={sw(3)} fill="none"/>
<path d="M20.5 22.5 L26.5 24" strokeWidth={sw(3)} fill="none"/>
<path d="M18.5 27 L25.5 30" strokeWidth={sw(3.5)} fill="none"/>
<path d="M18.5 27 L15.5 34 L17 39" strokeWidth={sw(3.5)} fill="none"/>

    </svg>
  );
});

ClimbingIcon.displayName = 'ClimbingIcon';

export default ClimbingIcon;
