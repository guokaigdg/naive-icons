import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BadmintonIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<ellipse cx="20" cy="20" rx="8" ry="10" fill="#FFFFFF" transform="rotate(-30 20 20)"/>
<path d="M26 28 L38 40" stroke="#E76F51" strokeWidth={sw(4)} fill="none"/>
<path d="M15 15 L25 25 M25 15 L15 25 M20 10 L20 30" stroke="#264653" strokeWidth={sw(1.5)} fill="none"/>
<path d="M37 7 L41 12 L32 19 L28 14 Z" fill="#FAEDCD"/>

    </svg>
  );
});

BadmintonIcon.displayName = 'BadmintonIcon';

export default BadmintonIcon;
