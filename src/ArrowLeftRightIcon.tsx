import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ArrowLeftRightIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M11 24 L37 24" stroke="#2A9D8F" strokeWidth={sw(4)} fill="none"/>
<path d="M6 24 L14 19 L14 29 Z" fill="#2A9D8F" stroke="none"/>
<path d="M42 24 L34 19 L34 29 Z" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

ArrowLeftRightIcon.displayName = 'ArrowLeftRightIcon';

export default ArrowLeftRightIcon;
