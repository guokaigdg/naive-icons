import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const OvenIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="7" y="7" width="34" height="34" rx="3" fill="#264653"/>
<rect x="12" y="17" width="24" height="18" rx="2" fill="#FAEDCD" stroke="none"/>
<path d="M16 22 L32 22" stroke="#264653" strokeWidth={sw(2)} fill="none"/>
<circle cx="13" cy="12" r="2" fill="#E76F51" stroke="none"/>
<circle cx="20" cy="12" r="2" fill="#E9C46A" stroke="none"/>
<path d="M26 12 L38 12" stroke="#E9C46A" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

OvenIcon.displayName = 'OvenIcon';

export default OvenIcon;
