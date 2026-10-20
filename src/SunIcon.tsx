import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SunIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="24" r="9.6" fill="#E9C46A"/>
<path d="M24 4.8 L24 10.56" stroke="#2A2A2A"/>
<path d="M24 37.44 L24 43.2" stroke="#2A2A2A"/>
<path d="M4.8 24 L10.56 24" stroke="#2A2A2A"/>
<path d="M37.44 24 L43.2 24" stroke="#2A2A2A"/>
<path d="M10.56 10.56 L14.4 14.4" stroke="#2A2A2A"/>
<path d="M33.6 33.6 L37.44 37.44" stroke="#2A2A2A"/>
<path d="M10.56 37.44 L14.4 33.6" stroke="#2A2A2A"/>
<path d="M33.6 14.4 L37.44 10.56" stroke="#2A2A2A"/>

    </svg>
  );
});

SunIcon.displayName = 'SunIcon';

export default SunIcon;
