import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PieIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 9 L39 32 C31 38 17 38 9 32 Z" fill="#F4A6A4"/>
<path d="M9 32 C17 38 31 38 39 32 L37 37 C29 41 19 41 11 37 Z" fill="#E9C46A"/>
<path d="M21 19 C22 24 23 28 25 32" stroke="#E76F51" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

PieIcon.displayName = 'PieIcon';

export default PieIcon;
