import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CacheIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="8" width="32" height="32" rx="4" fill="#264653"/>
<rect x="14" y="14" width="20" height="8" rx="2" fill="#2A9D8F"/>
<rect x="14" y="26" width="20" height="8" rx="2" fill="#E9C46A"/>
<path d="M18 18 H30 M18 30 H26" stroke="#FAEDCD" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

CacheIcon.displayName = 'CacheIcon';

export default CacheIcon;
