import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const AtSignIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="20" cy="21" r="7" fill="#E9C46A"/>
<path d="M27 21 L27 24 C 27 28 31 30 35 27" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M35 27 C 38 24 39 19 38 15 C 36 9 29 5 21 5 C 11 5 5 13 5 22 C 5 31 12 37 21 37" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>

    </svg>
  );
});

AtSignIcon.displayName = 'AtSignIcon';

export default AtSignIcon;
