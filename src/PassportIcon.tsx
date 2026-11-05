import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PassportIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="12" y="6" width="24" height="36" rx="3" fill="#264653"/>
<circle cx="24" cy="19" r="6" fill="#E9C46A" stroke="none"/>
<path d="M18 19 H30" stroke="#264653" strokeWidth={sw(1.5)} fill="none"/>
<path d="M24 13 C21.5 16 21.5 22 24 25 C26.5 22 26.5 16 24 13" stroke="#264653" strokeWidth={sw(1.5)} fill="none"/>
<path d="M18 32 H30" stroke="#E9C46A" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

PassportIcon.displayName = 'PassportIcon';

export default PassportIcon;
