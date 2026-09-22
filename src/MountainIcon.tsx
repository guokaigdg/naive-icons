import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const MountainIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      
<path d="M4 37 L17 15 L24 26 L31 13 L44 37 Z" fill="#588157"/>
<path d="M31 13 L34.5 18.5 L32 17.5 L30 19.5 L28.5 17.5 Z" fill="#FAEDCD"/>
<path d="M17 15 L19.5 19 L17.5 18 L15.8 20 L14.6 18.5 Z" fill="#FAEDCD"/>
<path d="M31 13 L31 6.5" stroke="#2A2A2A" stroke-width="2"/>
<path d="M31 6.5 L37.5 8.5 L31 10.5 Z" fill="#E76F51"/>

    </svg>
  );
});

MountainIcon.displayName = 'MountainIcon';

export default MountainIcon;
