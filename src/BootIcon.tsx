import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BootIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M16 8 L29 8 L29 27 C29 31 33 32 38 32 C41 32 42 34 42 38 C42 41 39 42 35 42 L14 42 C11 42 10 40 11 37 L13 21 C13 16 14 13 16 12 Z" fill="#8B5E3C"/>
<path d="M11 38 C20 38 32 38 42 38" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M18 15 L27 19" stroke="#FAEDCD" strokeWidth={sw(2)} fill="none"/>
<path d="M18 21 L27 25" stroke="#FAEDCD" strokeWidth={sw(2)} fill="none"/>
<path d="M16 11 L29 11" stroke="#FAEDCD" strokeWidth={sw(1.8)} fill="none"/>
<path d="M33 33 C36 37 39 39 41 39" stroke="#FAEDCD" strokeWidth={sw(1.5)} fill="none"/>

    </svg>
  );
});

BootIcon.displayName = 'BootIcon';

export default BootIcon;
