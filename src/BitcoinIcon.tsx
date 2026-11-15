import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BitcoinIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
<path d="M20 14.5 V33.5 M20 14.5 H26.5 C 30.5 14.5 30.5 23.5 26.5 23.5 H20 M20 23.5 H27.5 C 31.5 23.5 31.5 33.5 27.5 33.5 H20" stroke="#8B5E3C" strokeWidth={sw(2.6)} fill="none"/>
<path d="M23 10.5 V14.5 M26 10.5 V14.5 M23 33.5 V37.5 M26 33.5 V37.5" stroke="#8B5E3C" strokeWidth={sw(2.2)} fill="none"/>

    </svg>
  );
});

BitcoinIcon.displayName = 'BitcoinIcon';

export default BitcoinIcon;
