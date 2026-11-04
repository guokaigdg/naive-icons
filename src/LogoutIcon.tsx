import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LogoutIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="8" width="14" height="32" rx="3" fill="#FAEDCD"/>
<path d="M18 24 L38 24" stroke="#E76F51" strokeWidth={sw(5)} fill="none"/>
<path d="M30 16 L38 24 L30 32" stroke="#E76F51" strokeWidth={sw(5)} fill="none"/>
<circle cx="13" cy="24" r="1.7" fill="#2A2A2A" stroke="none"/>

    </svg>
  );
});

LogoutIcon.displayName = 'LogoutIcon';

export default LogoutIcon;
