import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SunriseIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M7 33 L41 33" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<path d="M13 33 C13 26 18 22 24 22 C30 22 35 26 35 33 Z" fill="#E9C46A"/>
<path d="M24 12 L24 16 M10 18 L13.5 21 M38 18 L34.5 21" stroke="#E76F51" strokeWidth={sw(2.5)} fill="none"/>
<path d="M14 39 C18 37 21 41 25 39 C29 37 32 41 36 39" stroke="#2A9D8F" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

SunriseIcon.displayName = 'SunriseIcon';

export default SunriseIcon;
