import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const InvoiceIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M11 5 L30 5 L37 12 L37 42 L11 42 Z" fill="#FFFFFF"/>
<path d="M30 5 L30 12 L37 12" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M16 18 L32 18 M16 24 L32 24 M16 30 L26 30" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="31" cy="36" r="4" fill="#E76F51"/>

    </svg>
  );
});

InvoiceIcon.displayName = 'InvoiceIcon';

export default InvoiceIcon;
