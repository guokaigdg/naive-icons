import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FlagOffIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M14 7.5 L14 41" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>
<path d="M14 10 C 20.5 6.4 27 13.5 33.5 10 L33.5 22.5 C 27 26 20.5 18.9 14 22.5 Z" fill="#FAEDCD"/>
<path d="M9.5 38.5 L38.5 9.5" stroke="#2A2A2A" strokeWidth={sw(3.4)} fill="none"/>

    </svg>
  );
});

FlagOffIcon.displayName = 'FlagOffIcon';

export default FlagOffIcon;
