import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SandwichIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M7 15 C7 8 41 8 41 15 L41 19 L7 19 Z" fill="#E9C46A"/>
<path d="M7 19 C13 23 19 17 25 21 C31 25 37 19 41 21 L41 25 L7 25 Z" fill="#588157"/>
<rect x="7" y="25" width="34" height="6" rx="2" fill="#E76F51"/>
<rect x="8" y="31" width="32" height="9" rx="3" fill="#E9C46A"/>

    </svg>
  );
});

SandwichIcon.displayName = 'SandwichIcon';

export default SandwichIcon;
