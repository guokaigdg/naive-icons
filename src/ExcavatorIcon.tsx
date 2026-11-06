import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ExcavatorIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="30" width="28" height="8" rx="4" fill="#264653"/>
<rect x="10" y="16" width="20" height="14" rx="3" fill="#E76F51"/>
<rect x="14" y="19" width="10" height="7" rx="2" fill="#FAEDCD"/>
<path d="M30 22 L39 13" stroke="#E76F51" strokeWidth={sw(4)} fill="none"/>
<path d="M39 13 L43 27" stroke="#E76F51" strokeWidth={sw(4)} fill="none"/>
<path d="M43 27 L38 34 L34 30 L39 26 Z" fill="#264653"/>

    </svg>
  );
});

ExcavatorIcon.displayName = 'ExcavatorIcon';

export default ExcavatorIcon;
