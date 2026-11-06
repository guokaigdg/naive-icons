import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SwanIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M10 36 C14 31 20 30 26 30 C24 26 23 21 25 16 C26 12 30 11 32 13 C33 15 32 17 30 18 C29 20 29 24 29 29 C34 31 38 34 39 38 C33 41 17 41 12 38 Z" fill="#FFFFFF"/>
<path d="M32 14 L37 16 L32 18 Z" fill="#E76F51" stroke="none"/>
<path d="M8 42 C14 43 30 43 37 42" stroke="#2A9D8F" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

SwanIcon.displayName = 'SwanIcon';

export default SwanIcon;
