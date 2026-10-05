import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const ZoomInIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const labelled = Boolean(props.title || props['aria-label'] || props.role);
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
      
<circle cx="20" cy="20" r="12.5" fill="none" stroke="#2A9D8F" stroke-width="4"/>
<path d="M29.5 29.5 L40 40" stroke="#2A2A2A" stroke-width="4.5"/>
<path d="M20 15 L20 25 M15 20 L25 20" stroke="#E76F51" stroke-width="4"/>

    </svg>
  );
});

ZoomInIcon.displayName = 'ZoomInIcon';

export default ZoomInIcon;
