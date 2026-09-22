import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const PauseIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      
<circle cx="24" cy="24" r="20" fill="#2A9D8F"/>
<path d="M19 16 L19 32" stroke="#E9C46A" stroke-width="5"/>
<path d="M29 16 L29 32" stroke="#E9C46A" stroke-width="5"/>

    </svg>
  );
});

PauseIcon.displayName = 'PauseIcon';

export default PauseIcon;
