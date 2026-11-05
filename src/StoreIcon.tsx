import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const StoreIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M6 12 L42 12 L38 20 L10 20 Z" fill="#E76F51"/>
<rect x="8" y="20" width="32" height="22" rx="2" fill="#FAEDCD"/>
<path d="M6 12 Q 9 17 12 12 Q 15 17 18 12 Q 21 17 24 12 Q 27 17 30 12 Q 33 17 36 12 Q 39 17 42 12" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<rect x="20" y="28" width="9" height="14" fill="#2A9D8F" stroke="none"/>
<rect x="12" y="25" width="5" height="6" fill="#E9C46A" stroke="none"/>

    </svg>
  );
});

StoreIcon.displayName = 'StoreIcon';

export default StoreIcon;
