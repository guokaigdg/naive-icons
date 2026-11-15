import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ScreenShareIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="5" y="9" width="38" height="24" rx="3" fill="#264653"/>
<rect x="8.5" y="12.5" width="31" height="17" rx="1.5" fill="#FAEDCD" stroke="none"/>
<path d="M20 29 L20 17" stroke="#E76F51" strokeWidth={sw(3)}/>
<path d="M15 22 L20 16 L25 22" stroke="#E76F51" strokeWidth={sw(3)} fill="none"/>
<path d="M24 33 L24 41 M16 41 L32 41" stroke="#2A2A2A" strokeWidth={sw(3.5)}/>

    </svg>
  );
});

ScreenShareIcon.displayName = 'ScreenShareIcon';

export default ScreenShareIcon;
