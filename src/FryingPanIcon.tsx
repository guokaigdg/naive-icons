import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FryingPanIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M7 24.4 C 7 18 12.4 15.6 19 15.6 C 25.6 15.6 31 18 31 24.4 C 31 32 25.8 37.6 19 37.6 C 12.2 37.6 7 32 7 24.4 Z" fill="#264653"/>
<ellipse cx="19" cy="23.2" rx="11" ry="4.2" fill="#FAEDCD" stroke="none"/>
<ellipse cx="19" cy="24.2" rx="7.4" ry="3.8" fill="#FFFFFF" stroke="none"/>
<circle cx="19" cy="23.8" r="2.6" fill="#E9C46A" stroke="none"/>
<path d="M30.6 22 H 39.8" stroke="#2A2A2A" strokeWidth={sw(4.4)} fill="none"/>
<path d="M35.2 22 H 40" stroke="#8B5E3C" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

FryingPanIcon.displayName = 'FryingPanIcon';

export default FryingPanIcon;
