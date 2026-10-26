import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RadioIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M32 19 L37 12" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<rect x="8" y="19" width="32" height="21" rx="4" fill="#E76F51"/>
<circle cx="17" cy="29" r="5" fill="#FAEDCD"/>
<path d="M27 25 L36 25" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M27 33 L36 33" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

RadioIcon.displayName = 'RadioIcon';

export default RadioIcon;
