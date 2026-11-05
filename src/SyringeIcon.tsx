import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SyringeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="17" y="12" width="14" height="18" rx="2" fill="#FAEDCD"/>
<rect x="20" y="6" width="8" height="6" fill="#2A9D8F"/>
<rect x="19" y="20" width="10" height="8" fill="#E76F51" stroke="none"/>
<path d="M24 30 L24 42" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M19 34 L29 34" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M20 27 L28 27" stroke="#FAEDCD" strokeWidth={sw(1.5)} fill="none"/>

    </svg>
  );
});

SyringeIcon.displayName = 'SyringeIcon';

export default SyringeIcon;
