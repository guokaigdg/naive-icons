import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SwimmingIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="19" cy="15" r="4" fill="#E9C46A"/>
<path d="M13 24 C18 21 24 22 30 27" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>
<path d="M8 35 C12 31 16 39 20 35 C24 31 28 39 32 35 C36 31 40 39 42 35" stroke="#2A9D8F" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

SwimmingIcon.displayName = 'SwimmingIcon';

export default SwimmingIcon;
