import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TrowelIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M9 26 C 9 22.5 39 22.5 39 26 L26 39.5 C 25 40.8 23 40.8 22 39.5 Z" fill="#FAEDCD"/>
<rect x="20" y="7" width="8" height="17" rx="4" fill="#8B5E3C"/>
<rect x="18.5" y="18.5" width="11" height="4.5" rx="1.5" fill="#264653" strokeWidth={sw(2.2)}/>

    </svg>
  );
});

TrowelIcon.displayName = 'TrowelIcon';

export default TrowelIcon;
