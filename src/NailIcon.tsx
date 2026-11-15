import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const NailIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="13" y="5.5" width="22" height="5.5" rx="2.5" fill="#264653"/>
<rect x="20.5" y="11" width="7" height="21" fill="#264653"/>
<path d="M20.5 32 H27.5 L24 41 Z" fill="#264653"/>
<path d="M16.5 8.2 H26" stroke="#FAEDCD" strokeWidth={sw(1.8)} fill="none"/>
<path d="M22.8 14 V30" stroke="#FAEDCD" strokeWidth={sw(1.6)} fill="none"/>

    </svg>
  );
});

NailIcon.displayName = 'NailIcon';

export default NailIcon;
