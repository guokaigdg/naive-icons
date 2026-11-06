import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WalkieTalkieIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M19 13 L19 7 C19 5.5 20 4.5 21.5 4.5 C23 4.5 24 5.5 24 7 L24 13" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M16 14 C16 11 18 10 24 10 C30 10 32 11 32 14 L32 37 C32 40 30 41 24 41 C18 41 16 40 16 37 Z" fill="#264653"/>
<rect x="19" y="16" width="10" height="7" rx="2" fill="#E9C46A" stroke="none"/>
<path d="M20 28 L28 28 M20 33 L28 33" stroke="#FAEDCD" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="20.5" cy="37.5" r="1.6" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

WalkieTalkieIcon.displayName = 'WalkieTalkieIcon';

export default WalkieTalkieIcon;
