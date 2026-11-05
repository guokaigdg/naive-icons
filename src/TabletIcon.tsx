import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TabletIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="10" y="5" width="28" height="38" rx="5" fill="#264653"/>
<rect x="13" y="9" width="22" height="27" rx="2" fill="#FAEDCD" stroke="none"/>
<circle cx="24" cy="39" r="2" fill="#FAEDCD" stroke="none"/>

    </svg>
  );
});

TabletIcon.displayName = 'TabletIcon';

export default TabletIcon;
