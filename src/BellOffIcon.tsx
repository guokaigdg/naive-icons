import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BellOffIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M11 32 C 11 14 37 14 37 32 Z" fill="#FAEDCD" stroke="#2A2A2A" strokeWidth={sw(3.5)}/>
<path d="M9 32 L39 32" stroke="#2A2A2A" strokeWidth={sw(3)}/>
<path d="M20 36 C 20 40 28 40 28 36" fill="#2A2A2A"/>
<path d="M10 39 L38 11" stroke="#E76F51" strokeWidth={sw(4.5)}/>

    </svg>
  );
});

BellOffIcon.displayName = 'BellOffIcon';

export default BellOffIcon;

