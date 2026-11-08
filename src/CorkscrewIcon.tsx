import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CorkscrewIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M15 8 C15 6 17 5 19 5 L29 5 C31 5 32 6 32 8 C32 10 31 11 29 11 L19 11 C17 11 15 10 15 8 Z" fill="#8B5E3C"/>
<path d="M24 11 L24 18" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M24 18 C28 18 28 22 24 22 C20 22 20 26 24 26 C28 26 28 30 24 30 C20 30 20 34 24 34 C27 34 27 37 25 38" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M25 38 L24 42" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

CorkscrewIcon.displayName = 'CorkscrewIcon';

export default CorkscrewIcon;
