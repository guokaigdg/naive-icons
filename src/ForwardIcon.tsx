import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ForwardIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M6 34 C 6 22 14 14 26 14 L36 14" stroke="#2A9D8F" strokeWidth={sw(4)} fill="none"/>
<path d="M42 14 L33 9 L33 19 Z" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

ForwardIcon.displayName = 'ForwardIcon';

export default ForwardIcon;
