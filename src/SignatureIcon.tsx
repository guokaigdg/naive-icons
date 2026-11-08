import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SignatureIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M7 34 C11 27 14 30 13 34 C12 38 16 38 18 34 C21 28 24 22 28 25 C31 27 29 33 27 34 C31 34 34 30 37 30" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M10 41 C18 40 30 41 38 40" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M36 30 C37 27 40 24 41 23 C43 25 42 28 40 31 C39 32 37 31 36 30 Z" fill="#264653" stroke="none"/>
<path d="M39 29 L41 25" stroke="#FAEDCD" strokeWidth={sw(1.5)} fill="none"/>

    </svg>
  );
});

SignatureIcon.displayName = 'SignatureIcon';

export default SignatureIcon;
