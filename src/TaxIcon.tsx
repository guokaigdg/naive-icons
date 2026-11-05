import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TaxIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="9" y="5" width="30" height="38" rx="3" fill="#FFFFFF"/>
<path d="M15 14 L33 14 M15 20 L33 20 M15 26 L28 26" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="20" cy="32" r="3" fill="#E76F51" stroke="none"/>
<circle cx="30" cy="38" r="3" fill="#E76F51" stroke="none"/>
<path d="M32 31 L18 40" stroke="#E76F51" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

TaxIcon.displayName = 'TaxIcon';

export default TaxIcon;
