import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BinocularsIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="10" y="18" width="11" height="21" rx="4" fill="#264653"/>
<rect x="27" y="18" width="11" height="21" rx="4" fill="#264653"/>
<path d="M21 24 L27 24" stroke="#2A2A2A" strokeWidth={sw(4)} fill="none"/>
<rect x="11" y="12" width="9" height="7" rx="3" fill="#E9C46A"/>
<rect x="28" y="12" width="9" height="7" rx="3" fill="#E9C46A"/>
<circle cx="15.5" cy="39" r="3" fill="#FAEDCD"/>
<circle cx="32.5" cy="39" r="3" fill="#FAEDCD"/>

    </svg>
  );
});

BinocularsIcon.displayName = 'BinocularsIcon';

export default BinocularsIcon;
