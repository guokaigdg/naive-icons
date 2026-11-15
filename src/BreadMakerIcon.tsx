import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BreadMakerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M16 10 C 16 5.5 32 5.5 32 10 Z" fill="#E9C46A" strokeWidth={sw(2)}/>
<rect x="8" y="18" width="32" height="22" rx="4" fill="#264653"/>
<rect x="10" y="10" width="28" height="9" rx="4" fill="#FAEDCD"/>
<rect x="12" y="24" width="14" height="10" rx="2" fill="#FAEDCD"/>
<circle cx="20.5" cy="29" r="2" fill="#E76F51" stroke="none"/>
<path d="M28 26.5 H35 M28 30.5 H35" stroke="#FAEDCD" strokeWidth={sw(1.8)} fill="none"/>

    </svg>
  );
});

BreadMakerIcon.displayName = 'BreadMakerIcon';

export default BreadMakerIcon;
