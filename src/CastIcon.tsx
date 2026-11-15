import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CastIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="24" y="8" width="18" height="13" rx="2" fill="#FAEDCD"/>
<path d="M8 34 A 6 6 0 0 1 14 40" stroke="#2A9D8F" strokeWidth={sw(3.5)} fill="none"/>
<path d="M8 27 A 13 13 0 0 1 21 40" stroke="#2A9D8F" strokeWidth={sw(3.5)} fill="none"/>
<path d="M8 20 A 20 20 0 0 1 28 40" stroke="#2A9D8F" strokeWidth={sw(3.5)} fill="none"/>
<circle cx="8" cy="40" r="2.2" fill="#2A9D8F" stroke="none"/>

    </svg>
  );
});

CastIcon.displayName = 'CastIcon';

export default CastIcon;
