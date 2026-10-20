import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WaterCupIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M13.3 12.33 L16.22 38.59 C 16.71 41.02 31.29 41.02 31.78 38.59 L34.7 12.33 Z" fill="#FAEDCD"/>
<path d="M16.03 24 C 21.08 22.54 26.92 25.46 31.97 24 L 30.42 34.7 C 30.03 37.13 17.97 37.13 17.58 34.7 Z" fill="#2A9D8F"/>
<path d="M27.89 11.36 L31.29 4.55" stroke="#E76F51" strokeWidth={sw(3)}/>
<circle cx="22.05" cy="28.86" r="1.56" fill="#FAEDCD"/>
<circle cx="25.46" cy="32.27" r="1.17" fill="#FAEDCD"/>

    </svg>
  );
});

WaterCupIcon.displayName = 'WaterCupIcon';

export default WaterCupIcon;
