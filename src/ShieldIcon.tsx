import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const ShieldIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      
<path d="M24 5 L41 12 C 41 28 34 38 24 43 C 14 38 7 28 7 12 Z" fill="#264653"/>
<path d="M17 24 L22 29 L31 19" stroke="#E9C46A" stroke-width="4.5" fill="none"/>

    </svg>
  );
});

ShieldIcon.displayName = 'ShieldIcon';

export default ShieldIcon;
