import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CouponIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M7 14 H41 V21.5 C 38 21.5 38 26.5 41 26.5 V34 H7 V26.5 C 10 26.5 10 21.5 7 21.5 Z" fill="#F4A6A4"/>
<circle cx="18" cy="20" r="2.2" fill="#E76F51" stroke="none"/>
<circle cx="30" cy="28" r="2.2" fill="#E76F51" stroke="none"/>
<path d="M17.5 30 L30.5 18" stroke="#E76F51" strokeWidth={sw(2.4)} fill="none"/>

    </svg>
  );
});

CouponIcon.displayName = 'CouponIcon';

export default CouponIcon;
