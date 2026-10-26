import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TvIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M16 13 L32 13" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M24 13 L17 6" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M24 13 L31 6" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<rect x="8" y="13" width="32" height="24" rx="4" fill="#E76F51"/>
<rect x="13" y="18" width="22" height="14" rx="2" fill="#FAEDCD"/>
<path d="M17 37 L15 42" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M31 37 L33 42" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

TvIcon.displayName = 'TvIcon';

export default TvIcon;
