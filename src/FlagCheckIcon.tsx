import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FlagCheckIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M14 7.5 L14 41" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>
<path d="M14 10 C 20.5 6.4 27 13.5 33.5 10 L33.5 22.5 C 27 26 20.5 18.9 14 22.5 Z" fill="#588157"/>
<path d="M19 15.4 L22.2 18.6 L28.6 12.2" stroke="#FFFFFF" strokeWidth={sw(3.2)} fill="none"/>
<circle cx="14" cy="7.5" r="2.2" fill="#E9C46A" stroke="none"/>

    </svg>
  );
});

FlagCheckIcon.displayName = 'FlagCheckIcon';

export default FlagCheckIcon;
