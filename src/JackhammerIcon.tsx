import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const JackhammerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="16" y="8" width="16" height="12" rx="3" fill="#E76F51"/>
<path d="M16 10 L8 6 M32 10 L40 6" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M24 20 L24 40" stroke="#264653" strokeWidth={sw(4)} fill="none"/>
<path d="M20 30 L28 30" stroke="#264653" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

JackhammerIcon.displayName = 'JackhammerIcon';

export default JackhammerIcon;
