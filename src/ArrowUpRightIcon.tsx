import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const ArrowUpRightIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      
<path d="M13 35 L33 15" stroke="#E76F51" stroke-width="4.5" fill="none"/>
<path d="M34 24 L34 12 L22 12" stroke="#E76F51" stroke-width="4.5" fill="none"/>
<circle cx="13" cy="35" r="3" fill="#2A9D8F"/>

    </svg>
  );
});

ArrowUpRightIcon.displayName = 'ArrowUpRightIcon';

export default ArrowUpRightIcon;
