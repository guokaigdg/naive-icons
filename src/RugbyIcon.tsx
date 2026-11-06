import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RugbyIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<ellipse cx="24" cy="24" rx="17" ry="11" fill="#E76F51"/>
<path d="M14 24 L34 24" stroke="#FAEDCD" strokeWidth={sw(2.5)} fill="none"/>
<path d="M18 21 L18 27 M24 21 L24 27 M30 21 L30 27" stroke="#FAEDCD" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

RugbyIcon.displayName = 'RugbyIcon';

export default RugbyIcon;
