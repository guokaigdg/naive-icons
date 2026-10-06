import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const InboxIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M5 19 L5 41 L43 41 L43 19 L29 19 L26 28 L22 28 L19 19 Z" fill="#2A9D8F" stroke="#2A2A2A" strokeWidth={sw(3.5)} strokeLinejoin="round"/>
<rect x="17" y="33" width="14" height="4" rx="2" fill="#FAEDCD"/>

    </svg>
  );
});

InboxIcon.displayName = 'InboxIcon';

export default InboxIcon;

