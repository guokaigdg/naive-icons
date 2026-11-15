import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RadioTowerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M17 43 L22 12 M31 43 L26 12" stroke="#2A2A2A" fill="none"/>
<path d="M18.1 36 H29.9 M19.6 27 H28.4 M20.9 19 H27.1" stroke="#2A2A2A" fill="none"/>
<path d="M18.1 36 L28.4 27 M19.6 27 L29.9 36" stroke="#2A2A2A" strokeWidth={sw(2)} fill="none"/>
<path d="M14 43 H34" stroke="#2A2A2A" fill="none"/>
<path d="M24 12 V8" stroke="#2A2A2A" fill="none"/>
<circle cx="24" cy="6.5" r="2.4" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

RadioTowerIcon.displayName = 'RadioTowerIcon';

export default RadioTowerIcon;
