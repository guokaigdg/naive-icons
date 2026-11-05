import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SnowboardIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<g transform="rotate(45 24 24)">
<rect x="20" y="7" width="8" height="34" rx="4" fill="#2A9D8F"/>
<rect x="18" y="15" width="12" height="5" rx="2" fill="#FAEDCD" stroke="none"/>
<rect x="18" y="28" width="12" height="5" rx="2" fill="#FAEDCD" stroke="none"/>
</g>

    </svg>
  );
});

SnowboardIcon.displayName = 'SnowboardIcon';

export default SnowboardIcon;
