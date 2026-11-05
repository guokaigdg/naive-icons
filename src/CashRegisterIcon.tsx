import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CashRegisterIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="12" y="8" width="20" height="10" rx="2" fill="#E9C46A"/>
<path d="M9 18 H35 L37 32 H7 Z" fill="#264653"/>
<path d="M13 24 H31" stroke="#FAEDCD" strokeWidth={sw(2)}/>
<path d="M14 29 H30" stroke="#FAEDCD" strokeWidth={sw(2)}/>
<rect x="7" y="34" width="32" height="7" rx="2" fill="#E76F51"/>

    </svg>
  );
});

CashRegisterIcon.displayName = 'CashRegisterIcon';

export default CashRegisterIcon;
