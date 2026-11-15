import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HatIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M13 29.5 V16 C 13 8.5 35 8.5 35 16 V29.5 Z" fill="#2A9D8F"/>
<rect x="14.2" y="22.5" width="19.6" height="4.5" fill="#E9C46A" stroke="none"/>
<rect x="5" y="29" width="38" height="7" rx="3.5" fill="#264653"/>

    </svg>
  );
});

HatIcon.displayName = 'HatIcon';

export default HatIcon;
