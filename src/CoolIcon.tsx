import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CoolIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="24" r="16" fill="#E9C46A"/>
<rect x="10" y="20" width="12" height="7" rx="2" fill="#264653" stroke="none"/>
<rect x="26" y="20" width="12" height="7" rx="2" fill="#264653" stroke="none"/>
<path d="M22 23 L26 23" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M16 33 C20 37 28 37 32 33" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

CoolIcon.displayName = 'CoolIcon';

export default CoolIcon;
