import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CastleIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M6 40 V16 H11 V12 H16 V16 H20 V12 H24 V16 H28 V12 H32 V16 H37 V12 H42 V16 V40 Z" fill="#264653"/>
<rect x="20" y="28" width="8" height="12" fill="#FAEDCD" stroke="none"/>
<rect x="12" y="23" width="4" height="5" fill="#E9C46A" stroke="none"/>
<rect x="32" y="23" width="4" height="5" fill="#E9C46A" stroke="none"/>

    </svg>
  );
});

CastleIcon.displayName = 'CastleIcon';

export default CastleIcon;
