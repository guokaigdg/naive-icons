import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BookOpenIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 14 C 19 9 12 8 6 10 L6 36 C 12 34 19 35 24 40 Z" fill="#FAEDCD"/>
<path d="M24 14 C 29 9 36 8 42 10 L42 36 C 36 34 29 35 24 40 Z" fill="#E9C46A"/>
<path d="M24 14 L24 40" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M11 17 L19 19" stroke="#8B5E3C" strokeWidth={sw(2)} fill="none"/>
<path d="M11 23 L19 25" stroke="#8B5E3C" strokeWidth={sw(2)} fill="none"/>
<path d="M29 19 L37 17" stroke="#2A2A2A" strokeWidth={sw(2)} fill="none"/>
<path d="M29 25 L37 23" stroke="#2A2A2A" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

BookOpenIcon.displayName = 'BookOpenIcon';

export default BookOpenIcon;
