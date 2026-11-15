import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ScrewIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="19.5" y="15" width="9" height="18" fill="#264653"/>
<path d="M19.5 19 H16 M28.5 19 H32 M19.5 24 H16 M28.5 24 H32 M19.5 29 H16 M28.5 29 H32" stroke="#264653" strokeWidth={sw(2.4)} fill="none"/>
<path d="M19.5 33 H28.5 L24 41 Z" fill="#264653"/>
<rect x="13.5" y="5.5" width="21" height="8" rx="3" fill="#E76F51"/>
<path d="M17.5 9.5 H30.5" stroke="#264653" strokeWidth={sw(2.4)} fill="none"/>
<path d="M24 6.5 V12.5" stroke="#264653" strokeWidth={sw(2.4)} fill="none"/>
<path d="M22.8 17 V31" stroke="#FAEDCD" strokeWidth={sw(1.6)} fill="none"/>

    </svg>
  );
});

ScrewIcon.displayName = 'ScrewIcon';

export default ScrewIcon;
