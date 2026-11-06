import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WaffleIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="9" width="32" height="32" rx="6" fill="#E9C46A"/>
<path d="M18 11 L18 39 M30 11 L30 39 M10 18 L38 18 M10 30 L38 30" stroke="#8B5E3C" strokeWidth={sw(2.5)} fill="none"/>
<rect x="19" y="19" width="10" height="10" rx="2" fill="#FAEDCD"/>

    </svg>
  );
});

WaffleIcon.displayName = 'WaffleIcon';

export default WaffleIcon;
