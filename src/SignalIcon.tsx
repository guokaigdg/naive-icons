import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SignalIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="9" width="18" height="30" rx="4" fill="#264653"/>
<rect x="9" y="13" width="12" height="18" rx="1" fill="#FAEDCD" stroke="none"/>
<circle cx="15" cy="35" r="1.7" fill="#FAEDCD" stroke="none"/>
<path d="M28 14 A 12 12 0 0 1 28 34" stroke="#E76F51" strokeWidth={sw(3.5)} fill="none"/>
<path d="M34 8 A 20 20 0 0 1 34 40" stroke="#E76F51" strokeWidth={sw(3.5)} fill="none"/>

    </svg>
  );
});

SignalIcon.displayName = 'SignalIcon';

export default SignalIcon;
