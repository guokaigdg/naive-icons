import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BackpackIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="9" y="14" width="30" height="26" rx="7" fill="#2A9D8F"/>
<path d="M18 14 C 18 8 30 8 30 14" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<rect x="16" y="27" width="16" height="9" rx="3" fill="#E9C46A"/>
<path d="M20 27 L28 27" stroke="#8B5E3C" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="24" cy="32" r="1.6" fill="#8B5E3C" stroke="none"/>

    </svg>
  );
});

BackpackIcon.displayName = 'BackpackIcon';

export default BackpackIcon;
