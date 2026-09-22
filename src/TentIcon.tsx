import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const TentIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      
<path d="M5 37 L24 11 L43 37 Z" fill="#E76F51"/>
<path d="M24 21 L32.5 37 L15.5 37 Z" fill="#FAEDCD"/>
<path d="M24 11 L24 6" stroke="#2A2A2A" stroke-width="2"/>
<path d="M24 6 L31 8.5 L24 11 Z" fill="#E9C46A"/>

    </svg>
  );
});

TentIcon.displayName = 'TentIcon';

export default TentIcon;
