import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PresentationIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="8" width="36" height="24" rx="3" fill="#264653"/>
<rect x="9.5" y="11.5" width="29" height="17" rx="1.5" fill="#FAEDCD" stroke="none"/>
<path d="M14 24 L20 17 L25 22 L32 15" stroke="#E76F51" strokeWidth={sw(2.5)} fill="none"/>
<path d="M24 32 L24 40" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>
<path d="M17 40 L31 40" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>

    </svg>
  );
});

PresentationIcon.displayName = 'PresentationIcon';

export default PresentationIcon;
