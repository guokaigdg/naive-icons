import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MicOffIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="17" y="6" width="14" height="22" rx="7" fill="#264653"/>
<path d="M10 22 L10 26 C10 34 18 38 24 38 C30 38 38 34 38 26 L38 22" fill="none" stroke="#2A2A2A"/>
<path d="M24 38 L24 42" stroke="#2A2A2A"/>
<path d="M10 10 L38 40" stroke="#E76F51" strokeWidth={sw(4)} fill="none"/>

    </svg>
  );
});

MicOffIcon.displayName = 'MicOffIcon';

export default MicOffIcon;
