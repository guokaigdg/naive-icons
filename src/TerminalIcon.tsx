import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TerminalIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="10" width="36" height="28" rx="4" fill="#264653"/>
<rect x="9.5" y="13.5" width="29" height="21" rx="1.5" fill="#FAEDCD" stroke="none"/>
<path d="M15 21 L19 25 L15 29" stroke="#2A9D8F" strokeWidth={sw(3)} fill="none"/>
<path d="M23 30 L32 30" stroke="#E76F51" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

TerminalIcon.displayName = 'TerminalIcon';

export default TerminalIcon;
