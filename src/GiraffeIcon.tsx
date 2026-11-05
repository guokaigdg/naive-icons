import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GiraffeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<ellipse cx="18" cy="32" rx="11" ry="7" fill="#E9C46A"/>
<path d="M24 31 L26 13 L31 13 L28 33 Z" fill="#E9C46A"/>
<ellipse cx="30" cy="11" rx="6" ry="4" fill="#E9C46A"/>
<path d="M27 7 L27 10 M33 7 L33 10" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M14 39 L13 42 M20 39 L20 42 M25 39 L25 42" stroke="#8B5E3C" strokeWidth={sw(3)} fill="none"/>
<circle cx="29" cy="10" r="1.2" fill="#2A2A2A" stroke="none"/>
<circle cx="17" cy="30" r="2" fill="#8B5E3C" stroke="none"/>
<circle cx="22" cy="34" r="2" fill="#8B5E3C" stroke="none"/>
<circle cx="28" cy="20" r="1.8" fill="#8B5E3C" stroke="none"/>

    </svg>
  );
});

GiraffeIcon.displayName = 'GiraffeIcon';

export default GiraffeIcon;
