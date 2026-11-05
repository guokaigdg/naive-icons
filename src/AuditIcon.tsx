import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const AuditIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="5" width="24" height="30" rx="3" fill="#FFFFFF"/>
<path d="M13 13 L27 13 M13 20 L27 20 M13 27 L22 27" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="30" cy="30" r="7" fill="#E9C46A"/>
<path d="M35 35 L41 41" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>

    </svg>
  );
});

AuditIcon.displayName = 'AuditIcon';

export default AuditIcon;
