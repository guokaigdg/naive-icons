import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BellRingIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M12 33 C 12 14 36 14 36 33 Z" fill="#E9C46A"/>
<path d="M10 33 L38 33" stroke="#2A2A2A" strokeWidth={sw(3)}/>
<path d="M20 37 C 20 41 28 41 28 37" fill="#E76F51"/>
<path d="M6 15 L10 19" stroke="#E76F51" strokeWidth={sw(3.5)} fill="none"/>
<path d="M42 15 L38 19" stroke="#E76F51" strokeWidth={sw(3.5)} fill="none"/>

    </svg>
  );
});

BellRingIcon.displayName = 'BellRingIcon';

export default BellRingIcon;
