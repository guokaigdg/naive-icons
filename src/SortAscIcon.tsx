import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SortAscIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M9 14 L29 14 M9 24 L25 24 M9 34 L21 34" stroke="#2A2A2A" strokeWidth={sw(4)} fill="none"/>
<path d="M35 39 L35 18" stroke="#2A9D8F" strokeWidth={sw(4.5)} fill="none"/>
<path d="M28 20 L35 9 L42 20 Z" fill="#2A9D8F"/>

    </svg>
  );
});

SortAscIcon.displayName = 'SortAscIcon';

export default SortAscIcon;
