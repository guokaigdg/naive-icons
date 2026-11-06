import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WhiskIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="20" y="6" width="8" height="4.5" rx="2" fill="#E76F51"/>
<path d="M24 10.5 L24 20" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>
<path d="M24 20 C14 22 12 32 24 40 C36 32 34 22 24 20 Z" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M24 20 C20 24 19 32 24 38 M24 20 C28 24 29 32 24 38" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

WhiskIcon.displayName = 'WhiskIcon';

export default WhiskIcon;
