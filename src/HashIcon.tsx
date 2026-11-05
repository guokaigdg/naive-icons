import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HashIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M18 8 L14 40" stroke="#264653" strokeWidth={sw(4)} fill="none"/>
<path d="M32 8 L28 40" stroke="#264653" strokeWidth={sw(4)} fill="none"/>
<path d="M8 18 L40 18" stroke="#E76F51" strokeWidth={sw(4)} fill="none"/>
<path d="M8 30 L40 30" stroke="#E76F51" strokeWidth={sw(4)} fill="none"/>

    </svg>
  );
});

HashIcon.displayName = 'HashIcon';

export default HashIcon;
