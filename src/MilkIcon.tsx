import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MilkIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M14 16 L24 6 L34 16 L34 42 L14 42 Z" fill="#FFFFFF"/>
<path d="M14 16 L34 16" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>
<path d="M14 25 L34 25" stroke="#264653" strokeWidth={sw(3)} fill="none"/>
<circle cx="24" cy="33" r="4" fill="#FAEDCD" stroke="none"/>

    </svg>
  );
});

MilkIcon.displayName = 'MilkIcon';

export default MilkIcon;
