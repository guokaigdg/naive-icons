import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LocateIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="24" r="13" fill="#FAEDCD"/>
<circle cx="24" cy="24" r="7" fill="#2A9D8F" stroke="none"/>
<circle cx="24" cy="24" r="2.5" fill="#FFFFFF" stroke="none"/>
<path d="M24 6 L24 11" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M24 37 L24 42" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M6 24 L11 24" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M37 24 L42 24" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

LocateIcon.displayName = 'LocateIcon';

export default LocateIcon;
