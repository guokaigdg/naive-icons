import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const InkBottleIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M13 21 L13 37 C13 40 15 42 18 42 L30 42 C33 42 35 40 35 37 L35 21 Z" fill="#264653"/>
<rect x="17" y="13" width="14" height="8" rx="2" fill="#E76F51"/>
<rect x="20" y="8" width="8" height="5" rx="2" fill="#264653"/>
<rect x="19" y="29" width="10" height="7" rx="1" fill="#FAEDCD" stroke="none"/>

    </svg>
  );
});

InkBottleIcon.displayName = 'InkBottleIcon';

export default InkBottleIcon;
