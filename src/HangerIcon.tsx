import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HangerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 9 C27 9 27 13 24 13 C21 13 21 9 24 9" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M24 15 L40 27 L40 30 L8 30 L8 27 Z" fill="none"/>

    </svg>
  );
});

HangerIcon.displayName = 'HangerIcon';

export default HangerIcon;
