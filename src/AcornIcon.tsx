import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const AcornIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 21 C 31 21 35 26 35 31 C 35 38 30 42 24 42 C 18 42 13 38 13 31 C 13 26 17 21 24 21 Z" fill="#E9C46A"/>
<path d="M13 23 C 13 16 18 12 24 12 C 30 12 35 16 35 23 Z" fill="#8B5E3C"/>
<path d="M24 12 L24 7" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

AcornIcon.displayName = 'AcornIcon';

export default AcornIcon;
