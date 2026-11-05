import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BurgerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 20 C8 13 16 9 24 9 C32 9 40 13 40 20 Z" fill="#E9C46A"/>
<path d="M9 22 L39 22 L38 26 L10 26 Z" fill="#588157"/>
<rect x="10" y="26" width="28" height="6" rx="2" fill="#E76F51" stroke="none"/>
<rect x="9" y="32" width="30" height="6" rx="3" fill="#E9C46A"/>
<circle cx="18" cy="15" r="1" fill="#FFFFFF" stroke="none"/>
<circle cx="24" cy="13" r="1" fill="#FFFFFF" stroke="none"/>
<circle cx="30" cy="15" r="1" fill="#FFFFFF" stroke="none"/>

    </svg>
  );
});

BurgerIcon.displayName = 'BurgerIcon';

export default BurgerIcon;
