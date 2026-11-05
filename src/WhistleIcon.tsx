import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WhistleIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M11 15 L29 15 C36 15 40 19 40 25 C40 32 36 36 29 36 L11 36 Z" fill="#2A9D8F"/>
<rect x="6" y="20" width="9" height="10" rx="2" fill="#264653"/>
<circle cx="32" cy="21" r="2.5" fill="#FFFFFF" stroke="none"/>
<path d="M38 12 C42 12 42 18 39 18" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

WhistleIcon.displayName = 'WhistleIcon';

export default WhistleIcon;
