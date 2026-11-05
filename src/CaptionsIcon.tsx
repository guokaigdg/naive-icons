import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CaptionsIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="10" width="36" height="28" rx="3" fill="#264653"/>
<path d="M17 19 C13 19 11 21 11 24 C11 27 13 29 17 29" stroke="#FAEDCD" strokeWidth={sw(2.5)} fill="none"/>
<path d="M34 19 C30 19 28 21 28 24 C28 27 30 29 34 29" stroke="#FAEDCD" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

CaptionsIcon.displayName = 'CaptionsIcon';

export default CaptionsIcon;
