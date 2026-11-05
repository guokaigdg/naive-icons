import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RiceCookerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 16 C8 10 40 10 40 16" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<rect x="8" y="17" width="32" height="24" rx="6" fill="#FFFFFF"/>
<path d="M8 22 L40 22" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<path d="M15 32 L26 32" stroke="#2A9D8F" strokeWidth={sw(2)} fill="none"/>
<circle cx="33" cy="32" r="2.5" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

RiceCookerIcon.displayName = 'RiceCookerIcon';

export default RiceCookerIcon;
