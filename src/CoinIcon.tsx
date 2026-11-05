import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CoinIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
<circle cx="24" cy="24" r="9.5" fill="#FAEDCD" stroke="none"/>
<path d="M19 17 L24 23 L29 17 M24 23 L24 31 M19 27 L29 27" stroke="#8B5E3C" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

CoinIcon.displayName = 'CoinIcon';

export default CoinIcon;
