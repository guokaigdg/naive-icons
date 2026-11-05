import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ScaleIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="9" width="32" height="32" rx="7" fill="#FAEDCD"/>
<circle cx="24" cy="21" r="7" fill="#2A9D8F"/>
<path d="M24 21 L28 17" stroke="#FAEDCD" strokeWidth={sw(2)} fill="none"/>
<path d="M14 33 H34" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

ScaleIcon.displayName = 'ScaleIcon';

export default ScaleIcon;
