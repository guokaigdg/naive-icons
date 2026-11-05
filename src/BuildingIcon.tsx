import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BuildingIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="10" y="6" width="28" height="36" rx="3" fill="#264653"/>
<rect x="14" y="12" width="4" height="4" fill="#FAEDCD" stroke="none"/>
<rect x="22" y="12" width="4" height="4" fill="#FAEDCD" stroke="none"/>
<rect x="30" y="12" width="4" height="4" fill="#FAEDCD" stroke="none"/>
<rect x="14" y="20" width="4" height="4" fill="#FAEDCD" stroke="none"/>
<rect x="22" y="20" width="4" height="4" fill="#FAEDCD" stroke="none"/>
<rect x="30" y="20" width="4" height="4" fill="#FAEDCD" stroke="none"/>
<rect x="14" y="28" width="4" height="4" fill="#FAEDCD" stroke="none"/>
<rect x="30" y="28" width="4" height="4" fill="#FAEDCD" stroke="none"/>
<rect x="21" y="34" width="8" height="8" fill="#E9C46A" stroke="none"/>

    </svg>
  );
});

BuildingIcon.displayName = 'BuildingIcon';

export default BuildingIcon;
