import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PopcornIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M10 24 L38 24 L34 42 L14 42 Z" fill="#E76F51"/>
<path d="M17 24 L15 42 M24 24 L24 42 M31 24 L33 42" stroke="#FAEDCD" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="14" cy="17" r="4" fill="#FAEDCD"/>
<circle cx="21" cy="12" r="4.5" fill="#E9C46A"/>
<circle cx="28" cy="15" r="4" fill="#FAEDCD"/>
<circle cx="34" cy="18" r="3.5" fill="#E9C46A"/>
<circle cx="24" cy="20" r="3.5" fill="#FAEDCD"/>

    </svg>
  );
});

PopcornIcon.displayName = 'PopcornIcon';

export default PopcornIcon;
