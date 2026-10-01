import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const XCircleIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      
<circle cx="24" cy="24" r="17" fill="none" stroke="#2A2A2A" stroke-width="3.5"/>
<path d="M17 17 L31 31" fill="none" stroke="#E76F51" stroke-width="4"/>
<path d="M31 17 L17 31" fill="none" stroke="#E76F51" stroke-width="4"/>

    </svg>
  );
});

XCircleIcon.displayName = 'XCircleIcon';

export default XCircleIcon;
