import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const UserMinusIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="19" cy="16" r="8" fill="#264653"/><circle cx="14" cy="16" r="1.5" fill="#2A2A2A" stroke="none"/><circle cx="24" cy="16" r="1.5" fill="#2A2A2A" stroke="none"/><path d="M16 20 Q 19 22.5 22 20" stroke="#2A2A2A" fill="none" strokeWidth={sw(2)}/><path d="M5 42 C 5 33 11 29 19 29 C 26 29 31 31 34 36 L 34 42 Z" fill="#2A9D8F"/><path d="M32 33 L42 33" stroke="#E76F51" strokeWidth={sw(4.5)} fill="none"/>

    </svg>
  );
});

UserMinusIcon.displayName = 'UserMinusIcon';

export default UserMinusIcon;
