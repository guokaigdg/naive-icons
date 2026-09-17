import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const MusicIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<ellipse cx="16" cy="32" rx="8" ry="6" transform="rotate(-15 16 32)" fill="#E76F51"/>
<ellipse cx="34" cy="28" rx="8" ry="6" transform="rotate(-15 34 28)" fill="#E76F51"/>
<path d="M22 14 L40 10 L40 28" stroke="#2A2A2A" stroke-width="3"/>

  
    </svg>
  );
});

MusicIcon.displayName = 'MusicIcon';

export default MusicIcon;
