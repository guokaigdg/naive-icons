import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ShieldAlertIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 7 C28 10 33 11 37 11 L37 22 C37 31 31 37 24 41 C17 37 11 31 11 22 L11 11 C15 11 20 10 24 7 Z" fill="#E76F51"/>
<path d="M24 16 L24 27" stroke="#FAEDCD" strokeWidth={sw(4)} fill="none"/>
<circle cx="24" cy="33.5" r="2.2" fill="#FAEDCD" stroke="none"/>

    </svg>
  );
});

ShieldAlertIcon.displayName = 'ShieldAlertIcon';

export default ShieldAlertIcon;
