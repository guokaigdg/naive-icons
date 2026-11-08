import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SunglassesIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 18 L40 18" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M8 18 L8 23 C8 29 12 32 16 32 C20 32 21.5 28 21.5 23 L21.5 18 Z" fill="#264653"/>
<path d="M40 18 L40 23 C40 29 36 32 32 32 C28 32 26.5 28 26.5 23 L26.5 18 Z" fill="#264653"/>
<path d="M24 18 L24 21" stroke="#2A2A2A" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

SunglassesIcon.displayName = 'SunglassesIcon';

export default SunglassesIcon;
