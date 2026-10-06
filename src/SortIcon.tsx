import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SortIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M15 40 L15 14" stroke="#2A9D8F" strokeWidth={sw(4.5)}/>
<path d="M7 22 L15 12 L23 22 Z" fill="#2A9D8F"/>
<path d="M33 8 L33 34" stroke="#E76F51" strokeWidth={sw(4.5)}/>
<path d="M25 26 L33 36 L41 26 Z" fill="#E76F51"/>

    </svg>
  );
});

SortIcon.displayName = 'SortIcon';

export default SortIcon;

