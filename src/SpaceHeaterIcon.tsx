import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SpaceHeaterIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="10" y="9" width="28" height="29" rx="6" fill="#264653"/>
<path d="M15 16 H33 M15 22 H33 M15 28 H33" stroke="#E76F51" strokeWidth={sw(3)} fill="none"/>
<path d="M16 38 V42 M32 38 V42" stroke="#264653" strokeWidth={sw(3.5)} fill="none"/>
<path d="M13.5 14 V20" stroke="#FAEDCD" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

SpaceHeaterIcon.displayName = 'SpaceHeaterIcon';

export default SpaceHeaterIcon;
