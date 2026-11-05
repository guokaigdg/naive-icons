import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HoneyIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="10" y="13" width="28" height="27" rx="4" fill="#E9C46A"/>
<rect x="14" y="7" width="20" height="6" rx="2" fill="#8B5E3C"/>
<path d="M24 22 C21 26 21 30 24 32 C27 30 27 26 24 22 Z" fill="#FAEDCD" stroke="none"/>

    </svg>
  );
});

HoneyIcon.displayName = 'HoneyIcon';

export default HoneyIcon;
