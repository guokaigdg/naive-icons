import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PerfumeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="19" y="5" width="10" height="7.5" rx="2" fill="#E76F51"/>
<rect x="21.5" y="12" width="5" height="4" fill="#264653" strokeWidth={sw(2.2)}/>
<rect x="11" y="16" width="26" height="27" rx="6" fill="#F4A6A4"/>
<rect x="15" y="22" width="18" height="11" rx="2" fill="#FAEDCD" stroke="none"/>
<circle cx="24" cy="27.5" r="2.6" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

PerfumeIcon.displayName = 'PerfumeIcon';

export default PerfumeIcon;
