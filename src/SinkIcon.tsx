import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SinkIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M5 22 H43 C43 31 36 36 24 36 C12 36 5 31 5 22 Z" fill="#FFFFFF"/>
<path d="M24 22 V14 C24 11 29 11 29 15" fill="none"/>
<circle cx="24" cy="30" r="2.5" fill="#264653" stroke="none"/>

    </svg>
  );
});

SinkIcon.displayName = 'SinkIcon';

export default SinkIcon;
