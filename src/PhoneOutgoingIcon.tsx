import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PhoneOutgoingIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M9 17 L14 17 L17 24 L13 27 C15 32 19 36 24 38 L27 33 L34 36 L34 40 C34 42 32 42 30 42 C17 42 6 31 6 18 C6 16 7 17 9 17 Z" fill="#588157"/>
<path d="M32 16 L42 6" stroke="#E76F51" strokeWidth={sw(4)} fill="none"/>
<path d="M36 6 L42 6 L42 12" stroke="#E76F51" strokeWidth={sw(4)} fill="none"/>

    </svg>
  );
});

PhoneOutgoingIcon.displayName = 'PhoneOutgoingIcon';

export default PhoneOutgoingIcon;
