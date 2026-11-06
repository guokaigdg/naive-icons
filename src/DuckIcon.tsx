import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DuckIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M6 30 C6 22 12 18.5 21 18.5 C30 18.5 39 21.5 39 29 C39 35 32 38.5 22 38.5 C13 38.5 6 36.5 6 30 Z" fill="#E9C46A"/>
<circle cx="32" cy="12.5" r="6.2" fill="#E9C46A"/>
<path d="M37 11.5 L43.5 14 L37.5 16.5 Z" fill="#E76F51" strokeWidth={sw(2.5)}/>
<circle cx="33.5" cy="11" r="1.1" fill="#2A2A2A" stroke="none"/>
<path d="M15 27 C18 23.5 25 23 28 27 C25 29.5 19 30 15 27 Z" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

DuckIcon.displayName = 'DuckIcon';

export default DuckIcon;
