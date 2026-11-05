import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ToggleLeftIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="16" width="36" height="16" rx="8" fill="#FAEDCD"/>
<circle cx="14" cy="24" r="5.5" fill="#2A9D8F"/>
<path d="M24 24 L32 24" stroke="#8B5E3C" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

ToggleLeftIcon.displayName = 'ToggleLeftIcon';

export default ToggleLeftIcon;
