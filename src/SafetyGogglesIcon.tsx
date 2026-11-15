import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SafetyGogglesIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="7" y="18" width="15" height="13" rx="4.5" fill="#FAEDCD"/>
<rect x="26" y="18" width="15" height="13" rx="4.5" fill="#FAEDCD"/>
<path d="M22 23 H26" strokeWidth={sw(3)} fill="none"/>
<path d="M7 20 H4.7 M41 20 H43.3" strokeWidth={sw(3)} fill="none"/>
<path d="M11 22.5 H15" stroke="#2A9D8F" strokeWidth={sw(2)} fill="none"/>
<path d="M30 22.5 H34" stroke="#2A9D8F" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

SafetyGogglesIcon.displayName = 'SafetyGogglesIcon';

export default SafetyGogglesIcon;
