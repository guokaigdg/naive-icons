import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const BookmarkIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M12 6 L36 6 L36 42 L24 32 L12 42 Z" fill="#E76F51"/>
<path d="M20 16 L28 16" stroke="#2A2A2A" stroke-width="2"/>

  
    </svg>
  );
});

BookmarkIcon.displayName = 'BookmarkIcon';

export default BookmarkIcon;
