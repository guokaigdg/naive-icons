import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ScissorsIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 22 L11 8" stroke="#2A2A2A" strokeWidth={sw(4.5)} fill="none"/><path d="M24 22 L37 8" stroke="#2A2A2A" strokeWidth={sw(4.5)} fill="none"/><path d="M24 22 L17 31" stroke="#2A2A2A" strokeWidth={sw(4)} fill="none"/><path d="M24 22 L31 31" stroke="#2A2A2A" strokeWidth={sw(4)} fill="none"/><circle cx="14" cy="36" r="6.5" fill="#E76F51"/><circle cx="34" cy="36" r="6.5" fill="#E76F51"/><circle cx="24" cy="22" r="2.2" fill="#FAEDCD" stroke="none"/>

    </svg>
  );
});

ScissorsIcon.displayName = 'ScissorsIcon';

export default ScissorsIcon;
