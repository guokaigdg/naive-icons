import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CurrencyPoundIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="24" r="16" fill="#E9C46A"/>
<path d="M31 14 C27 10 20 12 20 19 L20 33" stroke="#264653" strokeWidth={sw(3)} fill="none"/>
<path d="M16 24 L30 24 M20 33 L31 33" stroke="#264653" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

CurrencyPoundIcon.displayName = 'CurrencyPoundIcon';

export default CurrencyPoundIcon;
