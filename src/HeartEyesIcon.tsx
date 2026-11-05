import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HeartEyesIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="24" r="16" fill="#E9C46A"/>
<path d="M15 17 C13 15 10 17 12 20 L15 23 L18 20 C20 17 17 15 15 17 Z" fill="#E76F51" stroke="none"/>
<path d="M33 17 C31 15 28 17 30 20 L33 23 L36 20 C38 17 35 15 33 17 Z" fill="#E76F51" stroke="none"/>
<path d="M15 30 C19 36 29 36 33 30" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

HeartEyesIcon.displayName = 'HeartEyesIcon';

export default HeartEyesIcon;
