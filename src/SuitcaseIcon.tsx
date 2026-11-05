import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SuitcaseIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="7" y="15" width="34" height="27" rx="3" fill="#E76F51"/>
<path d="M17 15 V12 C17 10 19 9 21 9 H27 C29 9 31 10 31 12 V15"/>
<path d="M14 15 V42 M34 15 V42" stroke="#FAEDCD" strokeWidth={sw(2.5)}/>
<rect x="20" y="24" width="8" height="6" rx="1" fill="#264653" stroke="none"/>

    </svg>
  );
});

SuitcaseIcon.displayName = 'SuitcaseIcon';

export default SuitcaseIcon;
