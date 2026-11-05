import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FireStationIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M6 20 L24 8 L42 20 Z" fill="#E76F51"/>
<rect x="8" y="20" width="32" height="20" fill="#FAEDCD"/>
<rect x="14" y="26" width="20" height="14" fill="#264653" stroke="none"/>
<path d="M14 31 H34 M14 36 H34" stroke="#FAEDCD" strokeWidth={sw(2)}/>
<path d="M24 30 C24 27 26 26 26 28 C28 26 28 30 26 32 C24 33 24 32 24 30 Z" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

FireStationIcon.displayName = 'FireStationIcon';

export default FireStationIcon;
