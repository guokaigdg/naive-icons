import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const ChatIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M8 10 L40 10 L40 32 L26 32 L20 40 L20 32 L8 32 Z" fill="#E9C46A"/>
<circle cx="16" cy="21" r="1.8" fill="#2A2A2A"/>
<circle cx="24" cy="21" r="1.8" fill="#2A2A2A"/>
<circle cx="32" cy="21" r="1.8" fill="#2A2A2A"/>

  
    </svg>
  );
});

ChatIcon.displayName = 'ChatIcon';

export default ChatIcon;
