import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ClipboardListIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="10" y="10" width="28" height="32" rx="4" fill="#FAEDCD"/>
<rect x="18" y="6" width="12" height="8" rx="3" fill="#E9C46A"/>
<circle cx="17" cy="23" r="1.5" fill="#E76F51" stroke="none"/>
<path d="M21 23 L31 23" stroke="#2A2A2A" strokeWidth={sw(2)} fill="none"/>
<circle cx="17" cy="30" r="1.5" fill="#2A9D8F" stroke="none"/>
<path d="M21 30 L31 30" stroke="#2A2A2A" strokeWidth={sw(2)} fill="none"/>
<circle cx="17" cy="37" r="1.5" fill="#264653" stroke="none"/>
<path d="M21 37 L28 37" stroke="#2A2A2A" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

ClipboardListIcon.displayName = 'ClipboardListIcon';

export default ClipboardListIcon;
