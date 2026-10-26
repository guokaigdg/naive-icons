import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SparklesIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M18 7 L22 14 L29 18 L22 22 L18 29 L14 22 L7 18 L14 14 Z" fill="#E9C46A" stroke="none"/>
<path d="M32 22 L35 27 L40 30 L35 33 L32 38 L29 33 L24 30 L29 27 Z" fill="#E76F51" stroke="none"/>
<path d="M36 5 L38 8 L41 10 L38 12 L36 15 L34 12 L31 10 L34 8 Z" fill="#F4A6A4" stroke="none"/>

    </svg>
  );
});

SparklesIcon.displayName = 'SparklesIcon';

export default SparklesIcon;
