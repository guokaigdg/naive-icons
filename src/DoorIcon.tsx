import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DoorIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="12" y="6" width="24" height="36" rx="1" fill="#8B5E3C"/>
<circle cx="30" cy="25" r="2" fill="#E9C46A" stroke="none"/>
<path d="M9 42 H39" strokeWidth={sw(3)}/>

    </svg>
  );
});

DoorIcon.displayName = 'DoorIcon';

export default DoorIcon;
