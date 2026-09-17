import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const EllipsisIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      
<circle cx="12" cy="24" r="3" fill="#2A2A2A"/>
<circle cx="24" cy="24" r="3" fill="#2A2A2A"/>
<circle cx="36" cy="24" r="3" fill="#2A2A2A"/>

    </svg>
  );
});

EllipsisIcon.displayName = 'EllipsisIcon';

export default EllipsisIcon;
