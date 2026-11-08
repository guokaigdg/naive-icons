import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CrocodileIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M7 29 C7 26 10 25 13 26 C15 24 18 24 20 25 C22 23 26 23 28 25 C30 25 33 25 35 26 C37 26 39 27 40 27 C42 27 43 28 42 29 C41 30 39 30 38 29 C36 31 33 32 30 32 C27 34 23 35 19 34 C16 34 14 33 13 32 C10 32 8 31 7 29 Z" fill="#588157"/>
<path d="M13 25 L13 22 M18 24 L18 21 M24 23 L24 20 M30 25 L30 22" stroke="#2A2A2A" strokeWidth={sw(2)} fill="none"/>
<path d="M16 33 L15 37 M19 34 L18 38 M31 32 L32 36 M34 31 L35 35" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="36" cy="26.5" r="2" fill="#FAEDCD" stroke="none"/>
<circle cx="36" cy="26.5" r="1.1" fill="#2A2A2A" stroke="none"/>
<path d="M36 29 C38 30 40 30 42 29" stroke="#FAEDCD" strokeWidth={sw(1.5)} fill="none"/>
<circle cx="41" cy="27.5" r="1" fill="#2A2A2A" stroke="none"/>

    </svg>
  );
});

CrocodileIcon.displayName = 'CrocodileIcon';

export default CrocodileIcon;
