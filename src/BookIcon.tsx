import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const BookIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M8 10 L8 38 C 14 36 20 36 24 38 L24 10 C 20 8 14 8 8 10 Z" fill="#264653"/>
<path d="M24 10 L24 38 C 28 36 34 36 40 38 L40 10 C 34 8 28 8 24 10 Z" fill="#2A9D8F"/>
<path d="M24 10 L24 38" stroke="#2A2A2A"/>
<circle cx="16" cy="20" r="1.3" fill="#FFFFFF"/>
<circle cx="32" cy="20" r="1.3" fill="#FFFFFF"/>

  
    </svg>
  );
});

BookIcon.displayName = 'BookIcon';

export default BookIcon;
