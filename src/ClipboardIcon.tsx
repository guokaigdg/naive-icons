import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ClipboardIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="10" y="10" width="28" height="32" rx="4" fill="#FAEDCD"/><rect x="18" y="6" width="12" height="8" rx="3" fill="#E9C46A"/><path d="M18 24 L30 24" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/><path d="M18 32 L26 32" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

ClipboardIcon.displayName = 'ClipboardIcon';

export default ClipboardIcon;
