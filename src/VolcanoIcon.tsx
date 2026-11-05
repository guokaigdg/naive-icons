import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const VolcanoIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M5 41 L14 19 L20 25 L27 11 L43 41 Z" fill="#8B5E3C"/>
<path d="M27 11 L32 17 L23 17 Z" fill="#E76F51" stroke="none"/>
<circle cx="24" cy="7" r="2" fill="#FAEDCD" stroke="none"/>
<circle cx="29" cy="5" r="1.6" fill="#FAEDCD" stroke="none"/>

    </svg>
  );
});

VolcanoIcon.displayName = 'VolcanoIcon';

export default VolcanoIcon;
