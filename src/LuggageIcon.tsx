import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LuggageIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="9" y="14" width="30" height="24" rx="3" fill="#2A9D8F"/>
<path d="M17 14 L17 10 C17 8 20 7 24 7 C28 7 31 8 31 10 L31 14" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>
<path d="M9 23 L39 23" stroke="#FAEDCD" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="15" cy="40" r="2.5" fill="#264653" stroke="none"/>
<circle cx="33" cy="40" r="2.5" fill="#264653" stroke="none"/>

    </svg>
  );
});

LuggageIcon.displayName = 'LuggageIcon';

export default LuggageIcon;
