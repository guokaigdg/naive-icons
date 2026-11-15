import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TissueBoxIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="26" width="36" height="15.5" rx="3.5" fill="#2A9D8F"/>
<ellipse cx="24" cy="26" rx="9" ry="3" fill="#264653" stroke="none"/>
<path d="M16 27 C 15 22 12 19 11 15 C 15 13.5 20 15 22 19 C 23 14 28 12.5 30 16.5 C 32 20 32 24 31 27 Z" fill="#FFFFFF"/>
<path d="M9 33 H39" stroke="#FAEDCD" strokeWidth={sw(2.2)} fill="none"/>

    </svg>
  );
});

TissueBoxIcon.displayName = 'TissueBoxIcon';

export default TissueBoxIcon;
