import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CornerDownRightIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M10 10 L32 10 L32 30" stroke="#2A2A2A" strokeWidth={sw(4)} fill="none"/>
<path d="M32 35.5 L37.4 28.8 L26.6 28.8 Z" fill="#E76F51"/>

    </svg>
  );
});

CornerDownRightIcon.displayName = 'CornerDownRightIcon';

export default CornerDownRightIcon;
