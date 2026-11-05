import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SolarPanelIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="12" width="26" height="18" rx="2" fill="#264653"/>
<path d="M8 18 H34 M8 24 H34 M14 12 V30 M22 12 V30 M28 12 V30" stroke="#FAEDCD" strokeWidth={sw(2)} fill="none"/>
<path d="M14 30 V38 M28 30 V38" strokeWidth={sw(3)}/>
<circle cx="38" cy="36" r="4" fill="#E9C46A"/>

    </svg>
  );
});

SolarPanelIcon.displayName = 'SolarPanelIcon';

export default SolarPanelIcon;
