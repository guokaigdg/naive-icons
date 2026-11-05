import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CoffeeMachineIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="10" y="6" width="20" height="26" rx="3" fill="#264653"/>
<rect x="14" y="11" width="12" height="6" rx="2" fill="#E9C46A" stroke="none"/>
<path d="M18 32 H28" strokeWidth={sw(3)}/>
<path d="M15 35 H31 V38 C31 41 28 42 23 42 C18 42 15 40 15 36 Z" fill="#FFFFFF"/>
<path d="M31 36 C35 36 35 41 31 41" fill="none"/>

    </svg>
  );
});

CoffeeMachineIcon.displayName = 'CoffeeMachineIcon';

export default CoffeeMachineIcon;
