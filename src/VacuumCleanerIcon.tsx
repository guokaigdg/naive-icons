import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const VacuumCleanerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="24" width="18" height="14" rx="4" fill="#E76F51"/>
<circle cx="14" cy="38" r="3" fill="#264653"/>
<circle cx="20" cy="38" r="3" fill="#264653"/>
<path d="M26 27 C36 27 38 18 33 14" stroke="#264653" strokeWidth={sw(3)} fill="none"/>
<rect x="30" y="8" width="10" height="6" rx="2" fill="#264653"/>

    </svg>
  );
});

VacuumCleanerIcon.displayName = 'VacuumCleanerIcon';

export default VacuumCleanerIcon;
