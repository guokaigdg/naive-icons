import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PlungerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M22 24 L22 10 C22 8 23 7 24 7 C25 7 26 8 26 10 L26 24 Z" fill="#8B5E3C"/>
<path d="M12 34 C12 28 16 24 24 24 C32 24 36 28 36 34 C37 36 38 38 38 39 C38 41 36 42 34 42 L14 42 C12 42 10 41 10 39 C10 38 11 36 12 34 Z" fill="#E76F51"/>
<path d="M11 37 C17 39 31 39 37 37" stroke="#FAEDCD" strokeWidth={sw(2)} fill="none"/>
<path d="M21 22 L27 22" stroke="#2A2A2A" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

PlungerIcon.displayName = 'PlungerIcon';

export default PlungerIcon;
