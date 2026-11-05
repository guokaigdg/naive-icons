import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TomatoIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="27" r="14" fill="#E76F51"/>
<path d="M24 14 C 20 8 16 8 15 12 C 18 15 21 16 24 15 C 27 16 30 15 33 12 C 32 8 28 8 24 14 Z" fill="#588157"/>
<path d="M24 14 L24 9" stroke="#588157" strokeWidth={sw(3)} fill="none"/>
<circle cx="18" cy="22" r="2" fill="#FFFFFF" stroke="none"/>

    </svg>
  );
});

TomatoIcon.displayName = 'TomatoIcon';

export default TomatoIcon;
