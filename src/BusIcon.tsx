import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BusIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="8" width="32" height="28" rx="5" fill="#E76F51"/>
<rect x="12" y="13" width="24" height="10" rx="2" fill="#FAEDCD" stroke="none"/>
<path d="M12 27 L36 27" stroke="#264653" strokeWidth={sw(3)} fill="none"/>
<circle cx="16" cy="38" r="4" fill="#264653"/>
<circle cx="32" cy="38" r="4" fill="#264653"/>
<circle cx="16" cy="38" r="1.4" fill="#FAEDCD" stroke="none"/>
<circle cx="32" cy="38" r="1.4" fill="#FAEDCD" stroke="none"/>

    </svg>
  );
});

BusIcon.displayName = 'BusIcon';

export default BusIcon;
