import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const WaterCupIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      
<path d="M13 12 L16 39 C 16.5 41.5 31.5 41.5 32 39 L35 12 Z" fill="#FAEDCD"/>
<path d="M15.8 24 C 21 22.5 27 25.5 32.2 24 L 30.6 35 C 30.2 37.5 17.8 37.5 17.4 35 Z" fill="#2A9D8F"/>
<path d="M28 11 L31.5 4" stroke="#E76F51" stroke-width="3"/>
<circle cx="22" cy="29" r="1.6" fill="#FAEDCD"/>
<circle cx="25.5" cy="32.5" r="1.2" fill="#FAEDCD"/>

    </svg>
  );
});

WaterCupIcon.displayName = 'WaterCupIcon';

export default WaterCupIcon;
