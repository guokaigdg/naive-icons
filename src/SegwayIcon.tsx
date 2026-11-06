import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SegwayIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="14" cy="36" r="5" fill="#264653"/>
<circle cx="34" cy="36" r="5" fill="#264653"/>
<rect x="11" y="31" width="26" height="4" rx="2" fill="#FAEDCD"/>
<path d="M34 31 L34 18 L26 15" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M26 15 L32 15" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>

    </svg>
  );
});

SegwayIcon.displayName = 'SegwayIcon';

export default SegwayIcon;
