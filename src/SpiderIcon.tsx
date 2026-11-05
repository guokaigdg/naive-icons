import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SpiderIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="29" r="8" fill="#264653"/>
<circle cx="24" cy="18" r="4.5" fill="#264653"/>
<path d="M17 24 L9 18 M17 28 L8 27 M18 33 L10 38 M21 35 L17 41" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M31 24 L39 18 M31 28 L40 27 M30 33 L38 38 M27 35 L31 41" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="22" cy="17" r="1.3" fill="#FFFFFF" stroke="none"/>
<circle cx="26" cy="17" r="1.3" fill="#FFFFFF" stroke="none"/>

    </svg>
  );
});

SpiderIcon.displayName = 'SpiderIcon';

export default SpiderIcon;
