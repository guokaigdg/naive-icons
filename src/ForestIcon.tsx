import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ForestIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 34 L14 20 L20 34 Z" fill="#588157"/>
<path d="M18 34 L25 13 L32 34 Z" fill="#2A9D8F"/>
<path d="M30 34 L36 21 L42 34 Z" fill="#588157"/>
<rect x="12" y="34" width="4" height="5" fill="#8B5E3C" stroke="none"/>
<rect x="23" y="34" width="4" height="5" fill="#8B5E3C" stroke="none"/>
<rect x="34" y="34" width="4" height="5" fill="#8B5E3C" stroke="none"/>
<path d="M6 40 H42" stroke="#8B5E3C" strokeWidth={sw(3)}/>

    </svg>
  );
});

ForestIcon.displayName = 'ForestIcon';

export default ForestIcon;
