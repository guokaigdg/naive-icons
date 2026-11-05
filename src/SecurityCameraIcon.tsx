import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SecurityCameraIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="16" width="26" height="13" rx="4" fill="#264653"/>
<circle cx="34" cy="22.5" r="4" fill="#E9C46A"/>
<circle cx="34" cy="22.5" r="2" fill="#2A2A2A" stroke="none"/>
<path d="M12 16 V8 H20" strokeWidth={sw(3)}/>
<path d="M12 29 V36 H18" strokeWidth={sw(3)}/>

    </svg>
  );
});

SecurityCameraIcon.displayName = 'SecurityCameraIcon';

export default SecurityCameraIcon;
