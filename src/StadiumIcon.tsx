import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const StadiumIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<ellipse cx="24" cy="29" rx="18" ry="11" fill="#FAEDCD"/>
<ellipse cx="24" cy="29" rx="10" ry="5" fill="#588157" stroke="none"/>
<path d="M8 18 L8 26 M40 18 L40 26" stroke="#264653" strokeWidth={sw(3)} fill="none"/>
<path d="M6 18 L42 18" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

StadiumIcon.displayName = 'StadiumIcon';

export default StadiumIcon;
