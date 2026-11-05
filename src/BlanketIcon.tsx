import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BlanketIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="14" width="32" height="22" rx="3" fill="#2A9D8F"/>
<rect x="8" y="14" width="32" height="7" rx="3" fill="#FAEDCD" stroke="none"/>
<path d="M14 21 L14 36 M24 21 L24 36 M34 21 L34 36" stroke="#264653" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

BlanketIcon.displayName = 'BlanketIcon';

export default BlanketIcon;
