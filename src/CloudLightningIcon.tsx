import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CloudLightningIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M15 26 C 10 26 8 19 13 17 C 13 11 22 9 26 14 C 30 9 40 12 38 19 C 42 19 42 26 37 26 Z" fill="#FAEDCD"/>
<path d="M26 26 L18 36 L24 35 L21 42 L32 30 L25 31 L28 26 Z" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

CloudLightningIcon.displayName = 'CloudLightningIcon';

export default CloudLightningIcon;
