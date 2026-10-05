import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const RedoIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      
<path d="M24 10 A 14 14 0 1 0 36.1 17" fill="none" stroke="#2A2A2A" stroke-width="4.5"/>
<path d="M31 10 L24 5.5 L24 14.5 Z" fill="#E76F51"/>

    </svg>
  );
});

RedoIcon.displayName = 'RedoIcon';

export default RedoIcon;
