import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const MailIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<rect x="6" y="12" width="36" height="24" rx="3" fill="#F4A6A4"/>
<path d="M6 14 L24 28 L42 14" stroke="#2A2A2A"/>
<circle cx="20" cy="22" r="1.5" fill="#2A2A2A"/>
<circle cx="28" cy="22" r="1.5" fill="#2A2A2A"/>

  
    </svg>
  );
});

MailIcon.displayName = 'MailIcon';

export default MailIcon;
