import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const NetIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 9 V40 M40 9 V40" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>
<rect x="8" y="18" width="32" height="15" fill="#FFFFFF"/>
<path d="M8 23.5 H40 M8 28.5 H40" stroke="#2A2A2A" strokeWidth={sw(1.6)} fill="none"/>
<path d="M16 18 V33 M24 18 V33 M32 18 V33" stroke="#2A2A2A" strokeWidth={sw(1.6)} fill="none"/>

    </svg>
  );
});

NetIcon.displayName = 'NetIcon';

export default NetIcon;
