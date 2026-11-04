import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ServerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="9" width="32" height="12" rx="3" fill="#264653"/>
<rect x="8" y="24" width="32" height="12" rx="3" fill="#2A9D8F"/>
<circle cx="14" cy="15" r="1.8" fill="#E9C46A" stroke="none"/>
<circle cx="14" cy="30" r="1.8" fill="#E9C46A" stroke="none"/>
<path d="M21 15 L36 15" stroke="#FFFFFF" strokeWidth={sw(2)} fill="none"/>
<path d="M21 30 L30 30" stroke="#FFFFFF" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

ServerIcon.displayName = 'ServerIcon';

export default ServerIcon;
