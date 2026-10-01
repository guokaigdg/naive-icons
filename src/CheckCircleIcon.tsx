import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const CheckCircleIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
<path d="M15 24.5 L21 30.5 L32 18.5" fill="none" stroke="#588157" stroke-width="4"/>

    </svg>
  );
});

CheckCircleIcon.displayName = 'CheckCircleIcon';

export default CheckCircleIcon;
