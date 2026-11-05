import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TramIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="10" y="12" width="28" height="24" rx="4" fill="#E9C46A"/>
<rect x="14" y="16" width="20" height="10" rx="2" fill="#FFFFFF" stroke="none"/>
<path d="M18 12 L24 6 L30 12" stroke="#2A2A2A" fill="none"/>
<path d="M14 36 L14 42 M34 36 L34 42" stroke="#2A2A2A" fill="none"/>
<circle cx="24" cy="30" r="2" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

TramIcon.displayName = 'TramIcon';

export default TramIcon;
