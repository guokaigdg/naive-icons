import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MonitorIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="5" y="9" width="38" height="26" rx="4" fill="#2A9D8F"/>
<path d="M12 17 L21 17" stroke="#FAEDCD" strokeWidth={sw(3)}/>
<path d="M12 24 L27 24" stroke="#FAEDCD" strokeWidth={sw(3)}/>
<path d="M24 35 L24 41" strokeWidth={sw(3.5)}/>
<path d="M17 41 L31 41" strokeWidth={sw(3.5)}/>

    </svg>
  );
});

MonitorIcon.displayName = 'MonitorIcon';

export default MonitorIcon;
