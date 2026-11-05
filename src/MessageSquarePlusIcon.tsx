import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MessageSquarePlusIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M7 10 L41 10 L41 32 L26 32 L20 40 L20 32 L7 32 Z" fill="#E9C46A"/>
<path d="M24 16 L24 26 M19 21 L29 21" stroke="#264653" strokeWidth={sw(3.5)} fill="none"/>

    </svg>
  );
});

MessageSquarePlusIcon.displayName = 'MessageSquarePlusIcon';

export default MessageSquarePlusIcon;
