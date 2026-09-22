import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const GoogleChromeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      
<path d="M24 24 L41.32 14 A20 20 0 0 0 6.68 14 Z" fill="#E76F51" stroke="none"/>
<path d="M24 24 L41.32 14 A20 20 0 0 1 24 44 Z" fill="#E9C46A" stroke="none"/>
<path d="M24 24 L24 44 A20 20 0 0 1 6.68 14 Z" fill="#588157" stroke="none"/>
<circle cx="24" cy="24" r="8.8" fill="#FAEDCD" stroke="none"/>
<circle cx="24" cy="24" r="6.8" fill="#4A8FD4"/>
<circle cx="24" cy="24" r="20" fill="none"/>

    </svg>
  );
});

GoogleChromeIcon.displayName = 'GoogleChromeIcon';

export default GoogleChromeIcon;
