import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RunningIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="31" cy="10" r="4" fill="#E76F51"/>
<path d="M28 15 L24 24 L18 30" strokeWidth={sw(3.5)} fill="none"/>
<path d="M28 16 L34 22" strokeWidth={sw(3)} fill="none"/>
<path d="M24 24 L30 32 L34 39" strokeWidth={sw(3.5)} fill="none"/>
<path d="M24 24 L18 34 L12 38" strokeWidth={sw(3.5)} fill="none"/>

    </svg>
  );
});

RunningIcon.displayName = 'RunningIcon';

export default RunningIcon;
