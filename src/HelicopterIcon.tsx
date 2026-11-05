import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HelicopterIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<ellipse cx="22" cy="28" rx="12" ry="8" fill="#2A9D8F"/>
<path d="M32 28 L41 24 L41 32 Z" fill="#2A9D8F"/>
<path d="M8 12 L40 12" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M24 12 L24 20" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<circle cx="18" cy="27" r="2" fill="#FAEDCD" stroke="none"/>
<path d="M14 36 L10 41 M30 36 L34 41 M12 41 L34 41" stroke="#264653" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

HelicopterIcon.displayName = 'HelicopterIcon';

export default HelicopterIcon;
