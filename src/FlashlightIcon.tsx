import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FlashlightIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M18 18 L18 40 L30 40 L30 18 Z" fill="#264653"/>
<path d="M14 8 L34 8 L30 18 L18 18 Z" fill="#E9C46A"/>
<path d="M10 6 L14 12 M38 6 L34 12" stroke="#E9C46A" strokeWidth={sw(3)} fill="none"/>
<circle cx="24" cy="29" r="2.5" fill="#E9C46A" stroke="none"/>

    </svg>
  );
});

FlashlightIcon.displayName = 'FlashlightIcon';

export default FlashlightIcon;
