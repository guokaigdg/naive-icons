import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CliIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="10" width="36" height="28" rx="4" fill="#264653"/>
<path d="M13 19 L18 23 L13 27" stroke="#2A9D8F" strokeWidth={sw(3)} fill="none"/>
<path d="M23 29 H34" stroke="#FAEDCD" strokeWidth={sw(3)} fill="none"/>
<circle cx="11" cy="15" r="1.4" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

CliIcon.displayName = 'CliIcon';

export default CliIcon;
