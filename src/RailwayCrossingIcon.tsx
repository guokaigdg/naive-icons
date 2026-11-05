import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RailwayCrossingIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 6 L42 24 L24 42 L6 24 Z" fill="#FFFFFF"/>
<path d="M15 15 L33 33 M33 15 L15 33" stroke="#264653" strokeWidth={sw(4)} fill="none"/>
<circle cx="24" cy="24" r="3" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

RailwayCrossingIcon.displayName = 'RailwayCrossingIcon';

export default RailwayCrossingIcon;
