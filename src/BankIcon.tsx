import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BankIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 18 L24 8 L40 18 Z" fill="#E9C46A"/>
<path d="M10 20 L38 20 L38 38 L10 38 Z" fill="#FAEDCD"/>
<path d="M15 24 L15 34 M21 24 L21 34 M27 24 L27 34 M33 24 L33 34" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M7 40 L41 40" stroke="#2A2A2A" strokeWidth={sw(4)} fill="none"/>

    </svg>
  );
});

BankIcon.displayName = 'BankIcon';

export default BankIcon;
