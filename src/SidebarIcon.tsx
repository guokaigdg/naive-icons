import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SidebarIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="11" width="36" height="26" rx="4" fill="#FAEDCD"/>
<path d="M20 11 L20 37" stroke="#2A2A2A" strokeWidth={sw(2.5)}/>
<rect x="9" y="15" width="8" height="7" rx="2" fill="#264653" stroke="none"/>
<rect x="9" y="25" width="8" height="7" rx="2" fill="#2A9D8F" stroke="none"/>

    </svg>
  );
});

SidebarIcon.displayName = 'SidebarIcon';

export default SidebarIcon;
