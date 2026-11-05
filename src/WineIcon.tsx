import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WineIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M19 6 L29 6 L29 12 C34 14 35 18 35 22 L35 42 L13 42 L13 22 C13 18 14 14 19 12 Z" fill="#264653"/>
<rect x="17" y="25" width="14" height="10" rx="1" fill="#FAEDCD" stroke="none"/>
<path d="M22 30 L26 30" stroke="#E76F51" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

WineIcon.displayName = 'WineIcon';

export default WineIcon;
