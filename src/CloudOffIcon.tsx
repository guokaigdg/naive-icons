import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CloudOffIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M11 31 C7 31 6 26 9 23 C9 19 13 17 17 19 C19 14 25 13 29 17 C33 15 38 17 39 22 C42 24 41 29 38 31 Z" fill="#FAEDCD"/>
<path d="M10 10 L38 38" stroke="#E76F51" strokeWidth={sw(3.5)} fill="none"/>

    </svg>
  );
});

CloudOffIcon.displayName = 'CloudOffIcon';

export default CloudOffIcon;
