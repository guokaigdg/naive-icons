import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GymnasticRingsIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 7 H40" stroke="#2A2A2A" fill="none"/>
<path d="M16 7 V15 M32 7 V15" stroke="#8B5E3C" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="16" cy="26" r="9" stroke="#E76F51" strokeWidth={sw(4)} fill="none"/>
<circle cx="32" cy="26" r="9" stroke="#E76F51" strokeWidth={sw(4)} fill="none"/>

    </svg>
  );
});

GymnasticRingsIcon.displayName = 'GymnasticRingsIcon';

export default GymnasticRingsIcon;
