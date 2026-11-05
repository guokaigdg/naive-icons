import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BarnIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 20 L16 12 H32 L40 20 V40 H8 Z" fill="#E76F51"/>
<rect x="16" y="26" width="16" height="14" fill="#FAEDCD"/>
<path d="M16 33 H32 M24 26 V40" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

BarnIcon.displayName = 'BarnIcon';

export default BarnIcon;
