import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const SunIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const labelled = Boolean(props.title || props['aria-label'] || props.role);
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

    
<circle cx="24" cy="24" r="10" fill="#E9C46A"/>
<path d="M24 4 L24 10" stroke="#2A2A2A"/>
<path d="M24 38 L24 44" stroke="#2A2A2A"/>
<path d="M4 24 L10 24" stroke="#2A2A2A"/>
<path d="M38 24 L44 24" stroke="#2A2A2A"/>
<path d="M10 10 L14 14" stroke="#2A2A2A"/>
<path d="M34 34 L38 38" stroke="#2A2A2A"/>
<path d="M10 38 L14 34" stroke="#2A2A2A"/>
<path d="M34 14 L38 10" stroke="#2A2A2A"/>

  
    </svg>
  );
});

SunIcon.displayName = 'SunIcon';

export default SunIcon;
