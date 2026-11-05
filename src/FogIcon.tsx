import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FogIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M10 26 C6 26 6 20 10 19 C10 13 18 11 21 15 C25 10 34 12 34 18 C39 18 40 23 37 26 Z" fill="#FAEDCD"/>
<path d="M8 32 L40 32 M12 38 L36 38" stroke="#2A9D8F" strokeWidth={sw(3.5)} fill="none"/>

    </svg>
  );
});

FogIcon.displayName = 'FogIcon';

export default FogIcon;
