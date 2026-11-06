import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BubbleTeaIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M13 14 L35 14 L32 38 C31.7 40 29.5 41 27 41 L21 41 C18.5 41 16.3 40 16 38 Z" fill="#FAEDCD"/>
<path d="M26 14 L30 5" stroke="#2A9D8F" strokeWidth={sw(3.5)} fill="none"/>
<path d="M17 22 L33 22" stroke="#E9C46A" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="20" cy="35" r="2" fill="#264653" stroke="none"/>
<circle cx="24" cy="33" r="2" fill="#264653" stroke="none"/>
<circle cx="28" cy="36" r="2" fill="#264653" stroke="none"/>
<circle cx="25" cy="38" r="2" fill="#264653" stroke="none"/>

    </svg>
  );
});

BubbleTeaIcon.displayName = 'BubbleTeaIcon';

export default BubbleTeaIcon;
