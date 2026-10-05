import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const BadgeCheckIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const labelled = Boolean(props.title || props['aria-label'] || props.role);
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
      
<path d="M17 32 L17 43 L24 38.5 L31 43 L31 32 Z" fill="#E76F51"/>
<circle cx="24" cy="20" r="13" fill="#264653"/>
<path d="M18 20 L22.5 24.5 L30.5 15.5" stroke="#E9C46A" stroke-width="4" fill="none"/>

    </svg>
  );
});

BadgeCheckIcon.displayName = 'BadgeCheckIcon';

export default BadgeCheckIcon;
