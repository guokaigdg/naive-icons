import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CupcakeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M14 24 L18 40 L30 40 L34 24 Z" fill="#2A9D8F"/>
<path d="M13 24 C13 16 18 12 24 12 C30 12 35 16 35 24 C31 20 29 22 24 21 C19 22 17 20 13 24 Z" fill="#F4A6A4"/>
<circle cx="24" cy="9" r="3" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

CupcakeIcon.displayName = 'CupcakeIcon';

export default CupcakeIcon;
