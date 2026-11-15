import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const UniversityIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M5 20 L9 13 H39 L43 20 Z" fill="#E76F51"/>
<rect x="9" y="20" width="30" height="19" fill="#FAEDCD"/>
<rect x="10" y="23" width="28" height="16" fill="#264653"/>
<rect x="12" y="24" width="4" height="14" fill="#FAEDCD"/>
<rect x="19" y="24" width="4" height="14" fill="#FAEDCD"/>
<rect x="26" y="24" width="4" height="14" fill="#FAEDCD"/>
<rect x="33" y="24" width="4" height="14" fill="#FAEDCD"/>
<circle cx="24" cy="16.5" r="2.2" fill="#E9C46A" stroke="none"/>
<path d="M7 39 H41 M6 42 H42" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

UniversityIcon.displayName = 'UniversityIcon';

export default UniversityIcon;
