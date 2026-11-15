import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PotatoIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M9 27 C 8.5 20 13 15 19 15 C 23 15 27 13 31 14 C 36.5 15.5 39 21 38 27 C 37 34 31 39 24 39 C 16 39 9.5 34 9 27 Z" fill="#8B5E3C"/>
<circle cx="18" cy="22" r="1.2" fill="#2A2A2A" stroke="none"/>
<circle cx="30" cy="30" r="1.2" fill="#2A2A2A" stroke="none"/>
<path d="M14 20 C 16 17.5 19 16 22 15.5" stroke="#FAEDCD" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

PotatoIcon.displayName = 'PotatoIcon';

export default PotatoIcon;
