import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SickIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="24" r="16" fill="#588157"/>
<path d="M15 19.5 C 17 22 19 22 21 19.5" stroke="#2A2A2A" strokeWidth={sw(2.4)} fill="none"/>
<path d="M27 19.5 C 29 22 31 22 33 19.5" stroke="#2A2A2A" strokeWidth={sw(2.4)} fill="none"/>
<path d="M18 31.5 C 20.5 29 22.5 34 24 31.5 C 25.5 29 27.5 34 30 31.5" stroke="#2A2A2A" strokeWidth={sw(2.4)} fill="none"/>

    </svg>
  );
});

SickIcon.displayName = 'SickIcon';

export default SickIcon;
