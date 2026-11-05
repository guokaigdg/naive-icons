import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CrownIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 16 L8 34 L40 34 L40 16 L32 24 L24 12 L16 24 Z" fill="#E9C46A"/>
<circle cx="16" cy="28" r="2" fill="#E76F51" stroke="none"/>
<circle cx="24" cy="28" r="2" fill="#2A9D8F" stroke="none"/>
<circle cx="32" cy="28" r="2" fill="#264653" stroke="none"/>

    </svg>
  );
});

CrownIcon.displayName = 'CrownIcon';

export default CrownIcon;
