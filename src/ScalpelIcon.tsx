import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ScalpelIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M10 38 L26 22" stroke="#264653" strokeWidth={sw(4)} fill="none"/>
<path d="M26 22 L36 10 L41 15 L28 26 Z" fill="#FFFFFF"/>
<path d="M30 16 L36 22" stroke="#2A9D8F" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

ScalpelIcon.displayName = 'ScalpelIcon';

export default ScalpelIcon;
