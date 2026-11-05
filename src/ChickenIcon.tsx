import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ChickenIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="22" cy="26" r="12" fill="#FAEDCD"/>
<path d="M18 15 C 17 9 21 8 22 12 C 23 8 27 8 27 12 C 28 8 32 9 30 16 Z" fill="#E76F51"/>
<path d="M33 25 L41 28 L33 31 Z" fill="#E9C46A"/>
<circle cx="26" cy="22" r="1.8" fill="#2A2A2A" stroke="none"/>
<path d="M14 37 L12 42 M26 37 L28 42" stroke="#E76F51" strokeWidth={sw(3)} fill="none"/>
<path d="M18 34 C 16 37 16 39 18 41" stroke="#FAEDCD" strokeWidth={sw(4)} fill="none"/>

    </svg>
  );
});

ChickenIcon.displayName = 'ChickenIcon';

export default ChickenIcon;
