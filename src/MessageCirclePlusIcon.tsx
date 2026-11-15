import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MessageCirclePlusIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 6 C 34 6 41 13 41 22 C 41 31 34 38 24 38 C 21 38 18 37 16 36 L10 39 L12 32 C 9 29 7 26 7 22 C 7 13 14 6 24 6 Z" fill="#2A9D8F"/>
<path d="M24 15 V27 M18 21 H30" stroke="#FAEDCD" strokeWidth={sw(3.5)} fill="none"/>

    </svg>
  );
});

MessageCirclePlusIcon.displayName = 'MessageCirclePlusIcon';

export default MessageCirclePlusIcon;
