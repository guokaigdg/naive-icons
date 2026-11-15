import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RobotIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 8 V11" strokeWidth={sw(2.6)} fill="none"/>
<circle cx="24" cy="6" r="2" fill="#E76F51" strokeWidth={sw(2)}/>
<rect x="12.5" y="11" width="23" height="16" rx="3.5" fill="#FAEDCD"/>
<circle cx="19" cy="18" r="2.2" fill="#264653" stroke="none"/>
<circle cx="29" cy="18" r="2.2" fill="#264653" stroke="none"/>
<path d="M20.5 23 H27.5" strokeWidth={sw(2.2)} fill="none"/>
<rect x="15" y="28.5" width="18" height="14" rx="3" fill="#2A9D8F"/>
<path d="M15 32 H9.5 V39 M33 32 H38.5 V39" strokeWidth={sw(3)} fill="none"/>
<rect x="20" y="32.5" width="8" height="6" rx="1.5" fill="#E9C46A" strokeWidth={sw(2.2)}/>

    </svg>
  );
});

RobotIcon.displayName = 'RobotIcon';

export default RobotIcon;
