import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RefundIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="24" r="8" fill="#E9C46A" stroke="none"/>
<path d="M36 24 A12 12 0 1 0 22 35.5" stroke="#2A9D8F" strokeWidth={sw(3.5)} fill="none"/>
<path d="M16 31 L22 37 L28 33" stroke="#2A9D8F" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

RefundIcon.displayName = 'RefundIcon';

export default RefundIcon;
