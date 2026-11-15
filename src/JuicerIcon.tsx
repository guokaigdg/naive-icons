import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const JuicerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="21" y="5" width="6" height="6" rx="2" fill="#264653"/>
<rect x="14" y="10.5" width="20" height="6" rx="3" fill="#264653"/>
<path d="M16 16.5 H32 L34 28.5 H14 Z" fill="#FAEDCD"/>
<path d="M17.2 21.5 H30.8 L31.2 25.5 H16.6 Z" fill="#E9C46A" stroke="none"/>
<rect x="11" y="28.5" width="26" height="13.5" rx="3" fill="#264653"/>
<path d="M37 31 L41.5 33.5" stroke="#264653" strokeWidth={sw(3)} fill="none"/>
<circle cx="24" cy="35.5" r="2" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

JuicerIcon.displayName = 'JuicerIcon';

export default JuicerIcon;
