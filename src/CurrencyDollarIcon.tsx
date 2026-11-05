import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CurrencyDollarIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
<path d="M30 16 C28 13 20 13 19 18 C18 24 30 24 29 30 C28 35 20 35 18 32" stroke="#264653" strokeWidth={sw(3)} fill="none"/>
<path d="M24 11 L24 37" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

CurrencyDollarIcon.displayName = 'CurrencyDollarIcon';

export default CurrencyDollarIcon;
