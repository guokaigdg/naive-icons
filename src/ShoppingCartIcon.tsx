import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ShoppingCartIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="20" y="10" width="7" height="10" rx="1.5" fill="#E9C46A"/>
<rect x="29" y="12" width="7" height="8" rx="1.5" fill="#FAEDCD"/>
<path d="M15 19 L41 19 L37 32 L16 32 Z" fill="#E76F51"/>
<path d="M7 11 L12 11 L16 32" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M12 11 L15 11" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<circle cx="19" cy="38" r="3.5" fill="#2A2A2A" stroke="none"/>
<circle cx="34" cy="38" r="3.5" fill="#2A2A2A" stroke="none"/>

    </svg>
  );
});

ShoppingCartIcon.displayName = 'ShoppingCartIcon';

export default ShoppingCartIcon;
