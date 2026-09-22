import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const DumbbellIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const labelled = Boolean(props.title || props['aria-label'] || props.role);
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
      
<rect x="8" y="15" width="6.5" height="18" rx="2.5" fill="#E76F51"/>
<rect x="15.5" y="19" width="4" height="10" rx="2" fill="#E9C46A"/>
<path d="M19.5 24 L28.5 24" stroke="#2A2A2A" stroke-width="3.5"/>
<rect x="28.5" y="19" width="4" height="10" rx="2" fill="#E9C46A"/>
<rect x="33.5" y="15" width="6.5" height="18" rx="2.5" fill="#E76F51"/>

    </svg>
  );
});

DumbbellIcon.displayName = 'DumbbellIcon';

export default DumbbellIcon;
