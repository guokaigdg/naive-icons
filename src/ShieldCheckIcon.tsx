import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ShieldCheckIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 6 L38 12 V24 C38 34 32 39 24 42 C16 39 10 34 10 24 V12 Z" fill="#2A9D8F"/>
<path d="M18 24 L23 29 L31 20" stroke="#FFFFFF" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

ShieldCheckIcon.displayName = 'ShieldCheckIcon';

export default ShieldCheckIcon;
