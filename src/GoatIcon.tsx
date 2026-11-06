import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GoatIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M17 14 C12 12 10 7 12 5 C14 9 18 11 20 13" stroke="#8B5E3C" strokeWidth={sw(3)} fill="none"/>
<path d="M31 14 C36 12 38 7 36 5 C34 9 30 11 28 13" stroke="#8B5E3C" strokeWidth={sw(3)} fill="none"/>
<path d="M18 16 C14 21 13 29 15 35 C17 40 31 40 33 35 C35 29 34 21 30 16 C26 13 22 13 18 16 Z" fill="#FAEDCD"/>
<ellipse cx="15" cy="20" rx="3" ry="2.8" fill="#FAEDCD"/>
<ellipse cx="33" cy="20" rx="3" ry="2.8" fill="#FAEDCD"/>
<circle cx="20" cy="26" r="1.5" fill="#2A2A2A" stroke="none"/>
<circle cx="28" cy="26" r="1.5" fill="#2A2A2A" stroke="none"/>
<path d="M22 36 L21 42 M26 36 L27 42" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

GoatIcon.displayName = 'GoatIcon';

export default GoatIcon;
