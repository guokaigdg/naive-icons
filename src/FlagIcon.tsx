import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const FlagIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M12 5 L 12 43" stroke="#2A2A2A" stroke-width="3.5"/>
<path d="M12 8 C 19 4 26 12 33 8 L 33 22 C 26 26 19 18 12 22 Z" fill="#E76F51"/>
<circle cx="12" cy="5" r="2.5" fill="#E9C46A"/>

  
    </svg>
  );
});

FlagIcon.displayName = 'FlagIcon';

export default FlagIcon;
