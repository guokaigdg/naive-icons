import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RopeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<ellipse cx="24" cy="19" rx="15" ry="7" stroke="#2A2A2A" strokeWidth={sw(8.5)} fill="none"/>
<ellipse cx="24" cy="19" rx="15" ry="7" stroke="#8B5E3C" strokeWidth={sw(5)} fill="none"/>
<ellipse cx="24" cy="28" rx="15" ry="7" stroke="#2A2A2A" strokeWidth={sw(8.5)} fill="none"/>
<ellipse cx="24" cy="28" rx="15" ry="7" stroke="#8B5E3C" strokeWidth={sw(5)} fill="none"/>
<path d="M37 31 C 40 33 40 37 38 39" stroke="#2A2A2A" strokeWidth={sw(8.5)} fill="none"/>
<path d="M37 31 C 40 33 40 37 38 39" stroke="#8B5E3C" strokeWidth={sw(5)} fill="none"/>

    </svg>
  );
});

RopeIcon.displayName = 'RopeIcon';

export default RopeIcon;
