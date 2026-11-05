import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PulseOximeterIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="12" y="14" width="24" height="18" rx="5" fill="#264653"/>
<rect x="16" y="18" width="16" height="8" rx="2" fill="#FAEDCD" stroke="none"/>
<path d="M19 22 L23 22 L25 19 L27 22" stroke="#E76F51" strokeWidth={sw(1.8)} fill="none"/>
<path d="M18 32 L18 38 M30 32 L30 38" stroke="#264653" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

PulseOximeterIcon.displayName = 'PulseOximeterIcon';

export default PulseOximeterIcon;
