import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BabyBottleIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M19 14 L29 14 L29 17 C32 19 33 22 33 26 L33 38 C33 40 31 41 29 41 L19 41 C17 41 15 40 15 38 L15 26 C15 22 16 19 19 17 Z" fill="#FAEDCD"/>
<path d="M21 14 L21 9 C21 7 22 6 24 6 C26 6 27 7 27 9 L27 14 Z" fill="#E9C46A"/>
<path d="M15 28 L33 28" stroke="#2A9D8F" strokeWidth={sw(2.5)} fill="none"/>
<path d="M17 35 L31 35" stroke="#2A9D8F" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="24" cy="21" r="1.4" fill="#2A2A2A" stroke="none"/>

    </svg>
  );
});

BabyBottleIcon.displayName = 'BabyBottleIcon';

export default BabyBottleIcon;
