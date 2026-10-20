import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CoffeeCupIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M13.3 11.35 L34.7 11.35 L33.73 16.21 L14.27 16.21 Z" fill="#8B5E3C"/>
<path d="M14.75 16.21 L17.19 39.57 C 17.67 41.52 30.33 41.52 30.81 39.57 L33.25 16.21 Z" fill="#FAEDCD"/>
<path d="M15.44 23.03 L32.56 23.03 L31.69 30.81 L16.31 30.81 Z" fill="#E76F51"/>
<path d="M24 29.45 C 21.86 27.5 21.76 25.65 23.22 24.97 C 23.9 24.68 24 25.27 24 25.65 C 24 25.27 24.1 24.68 24.78 24.97 C 26.24 25.65 26.14 27.5 24 29.45 Z" fill="#FAEDCD" stroke="none"/>
<path d="M20.11 8.43 C 20.11 6.48 22.05 6.48 22.05 4.05" stroke="#2A2A2A" strokeWidth={sw(2)}/>
<path d="M26.92 8.43 C 26.92 6.48 28.87 6.48 28.87 4.05" stroke="#2A2A2A" strokeWidth={sw(2)}/>

    </svg>
  );
});

CoffeeCupIcon.displayName = 'CoffeeCupIcon';

export default CoffeeCupIcon;
