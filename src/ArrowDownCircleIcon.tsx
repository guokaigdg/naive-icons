import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ArrowDownCircleIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="24" r="17" fill="none" stroke="#2A2A2A" strokeWidth={sw(3.5)}/>
<path d="M24 14 L24 27" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>
<path d="M24 36 L17.5 27 L30.5 27 Z" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

ArrowDownCircleIcon.displayName = 'ArrowDownCircleIcon';

export default ArrowDownCircleIcon;
