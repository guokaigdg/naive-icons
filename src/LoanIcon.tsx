import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LoanIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="18" r="10" fill="#E9C46A"/>
<path d="M24 13 L24 23 M21 17 L27 17" stroke="#8B5E3C" strokeWidth={sw(2.5)} fill="none"/>
<path d="M24 31 L24 41 M18 35 L24 41 L30 35" stroke="#E76F51" strokeWidth={sw(3.5)} fill="none"/>

    </svg>
  );
});

LoanIcon.displayName = 'LoanIcon';

export default LoanIcon;
