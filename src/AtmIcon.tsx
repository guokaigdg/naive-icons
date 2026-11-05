import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const AtmIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="10" y="5" width="28" height="38" rx="4" fill="#2A9D8F"/>
<rect x="15" y="10" width="18" height="12" rx="2" fill="#FAEDCD" stroke="none"/>
<path d="M18 15 L30 15 M18 19 L26 19" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<path d="M17 28 L31 28" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<circle cx="20" cy="36" r="2.2" fill="#E9C46A" stroke="none"/>
<circle cx="27" cy="36" r="2.2" fill="#E9C46A" stroke="none"/>

    </svg>
  );
});

AtmIcon.displayName = 'AtmIcon';

export default AtmIcon;
