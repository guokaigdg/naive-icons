import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const UnlinkIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      
<g transform="rotate(45 24 24)">
<rect x="6" y="17" width="14" height="14" rx="7" fill="none" stroke="#2A2A2A" stroke-width="3.5"/>
<rect x="28" y="17" width="14" height="14" rx="7" fill="none" stroke="#2A2A2A" stroke-width="3.5"/></g>

    </svg>
  );
});

UnlinkIcon.displayName = 'UnlinkIcon';

export default UnlinkIcon;
