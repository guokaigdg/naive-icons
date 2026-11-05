import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WaterHeaterIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="12" y="10" width="24" height="28" rx="10" fill="#FFFFFF"/>
<path d="M18 38 L18 42 M30 38 L30 42" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<path d="M20 16 L28 16" stroke="#2A9D8F" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="24" cy="26" r="3" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

WaterHeaterIcon.displayName = 'WaterHeaterIcon';

export default WaterHeaterIcon;
