import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SkiIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 34 L30 26 C34 24.5 36 28 33 30 L11 38.5 Z" fill="#2A9D8F"/>
<path d="M14 38 L36 30 C40 28.5 42 32 39 34 L17 42.5 Z" fill="#2A9D8F"/>
<path d="M24 23 L40 33" stroke="#8B5E3C" strokeWidth={sw(2.6)} fill="none"/>
<path d="M26 24 L22 30 L18 33" stroke="#264653" strokeWidth={sw(6)} fill="none"/>
<path d="M26 24 L30 30 L32 34" stroke="#264653" strokeWidth={sw(6)} fill="none"/>
<path d="M17 14 C20 18 23 22 26 24" stroke="#E76F51" strokeWidth={sw(9)} fill="none"/>
<path d="M19 17 L13 21" stroke="#E76F51" strokeWidth={sw(4)} fill="none"/>
<path d="M22 20 L24 23" stroke="#E76F51" strokeWidth={sw(4)} fill="none"/>
<circle cx="16" cy="10" r="4.8" fill="#264653"/>
<path d="M11 10 H19" stroke="#2A9D8F" strokeWidth={sw(3)} fill="none"/>
<circle cx="13" cy="21" r="2.3" fill="#E9C46A" stroke="none"/>
<circle cx="24" cy="23" r="2.3" fill="#E9C46A" stroke="none"/>
<circle cx="18" cy="33" r="2.5" fill="#E9C46A"/>
<circle cx="32" cy="34" r="2.5" fill="#E9C46A"/>
<path d="M13 21 L39 28" stroke="#8B5E3C" strokeWidth={sw(2.6)} fill="none"/>

    </svg>
  );
});

SkiIcon.displayName = 'SkiIcon';

export default SkiIcon;
