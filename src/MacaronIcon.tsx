import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MacaronIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M10 24 C 10 17 16 13 24 13 C 32 13 38 17 38 24 Z" fill="#F4A6A4"/>
<rect x="10.5" y="23" width="27" height="7.5" rx="3.7" fill="#FAEDCD"/>
<path d="M10 31.5 C 12 36 17 39 24 39 C 31 39 36 36 38 31.5 Z" fill="#F4A6A4"/>
<path d="M14 20.5 C 17 18.5 21 17.8 24 17.8" stroke="#FFFFFF" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

MacaronIcon.displayName = 'MacaronIcon';

export default MacaronIcon;
