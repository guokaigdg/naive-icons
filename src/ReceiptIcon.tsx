import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ReceiptIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M12 6 L36 6 L36 38 L32 41 L28 38 L24 41 L20 38 L16 41 L12 38 Z" fill="#FAEDCD"/>
<path d="M17 14 L31 14 M17 20 L31 20 M17 26 L26 26" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<path d="M18 32 L30 32" stroke="#E76F51" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

ReceiptIcon.displayName = 'ReceiptIcon';

export default ReceiptIcon;
