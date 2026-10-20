import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ArrowJumpIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M15 22 L24 9 L33 22 Z" fill="#E76F51"/><path d="M24 34 L24 20" stroke="#2A2A2A" strokeWidth={sw(4)} fill="none"/><path d="M11 38 L37 38" stroke="#2A2A2A" strokeWidth={sw(4)} fill="none"/><path d="M18 38 L30 38" stroke="#FAEDCD" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

ArrowJumpIcon.displayName = 'ArrowJumpIcon';

export default ArrowJumpIcon;
