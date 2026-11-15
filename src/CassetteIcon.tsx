import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CassetteIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="5" y="13" width="38" height="22" rx="4" fill="#264653"/>
<rect x="11" y="18" width="26" height="8.5" rx="2" fill="#FAEDCD" stroke="none"/>
<circle cx="17" cy="22.2" r="2.3" fill="#E76F51" stroke="none"/>
<circle cx="31" cy="22.2" r="2.3" fill="#E76F51" stroke="none"/>
<path d="M14 35 L18 29.5 L30 29.5 L34 35" fill="#E9C46A"/>

    </svg>
  );
});

CassetteIcon.displayName = 'CassetteIcon';

export default CassetteIcon;
