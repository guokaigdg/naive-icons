import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MoveIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 9 L24 39 M9 24 L39 24" stroke="#2A9D8F" strokeWidth={sw(4)} fill="none"/>
<path d="M24 5 L19 13 L29 13 Z" fill="#E76F51" stroke="none"/>
<path d="M24 43 L19 35 L29 35 Z" fill="#E76F51" stroke="none"/>
<path d="M5 24 L13 19 L13 29 Z" fill="#E76F51" stroke="none"/>
<path d="M43 24 L35 19 L35 29 Z" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

MoveIcon.displayName = 'MoveIcon';

export default MoveIcon;
