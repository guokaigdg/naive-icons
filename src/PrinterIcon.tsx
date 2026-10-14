import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PrinterIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M17 6 L31 6 L31 15 L17 15 Z" fill="#FAEDCD"/>
<path d="M6 18 C 6 14.5 8.5 12 12 12 L36 12 C 39.5 12 42 14.5 42 18 L42 32 L6 32 Z" fill="#2A9D8F"/>
<path d="M17 27 L31 27 L31 42 L17 42 Z" fill="#FAEDCD"/>
<path d="M9 22 L14 22" stroke="#FAEDCD" strokeWidth={sw(2.5)}/>
<circle cx="36" cy="22" r="1.6" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

PrinterIcon.displayName = 'PrinterIcon';

export default PrinterIcon;
