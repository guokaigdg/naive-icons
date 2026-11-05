import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MinimizeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M7 7 L16 16" stroke="#E76F51" strokeWidth={sw(4)} fill="none"/>
<path d="M18 10 L18 18 L10 18 Z" fill="#E76F51" stroke="none"/>
<path d="M41 7 L32 16" stroke="#E76F51" strokeWidth={sw(4)} fill="none"/>
<path d="M30 10 L30 18 L38 18 Z" fill="#E76F51" stroke="none"/>
<path d="M7 41 L16 32" stroke="#E76F51" strokeWidth={sw(4)} fill="none"/>
<path d="M10 30 L18 30 L18 38 Z" fill="#E76F51" stroke="none"/>
<path d="M41 41 L32 32" stroke="#E76F51" strokeWidth={sw(4)} fill="none"/>
<path d="M30 30 L38 30 L38 38 Z" fill="#E76F51" stroke="none"/>
<circle cx="24" cy="24" r="3" fill="#2A9D8F" stroke="none"/>

    </svg>
  );
});

MinimizeIcon.displayName = 'MinimizeIcon';

export default MinimizeIcon;
