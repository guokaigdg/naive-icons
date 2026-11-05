import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ShowerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 6 V12"/>
<path d="M16 18 C16 13 32 13 32 18" fill="#2A9D8F"/>
<path d="M14 18 H34" strokeWidth={sw(3)}/>
<path d="M16 25 V29" stroke="#2A9D8F" strokeWidth={sw(2)} fill="none"/>
<path d="M20 25 V33" stroke="#2A9D8F" strokeWidth={sw(2)} fill="none"/>
<path d="M24 25 V29" stroke="#2A9D8F" strokeWidth={sw(2)} fill="none"/>
<path d="M28 25 V33" stroke="#2A9D8F" strokeWidth={sw(2)} fill="none"/>
<path d="M32 25 V29" stroke="#2A9D8F" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

ShowerIcon.displayName = 'ShowerIcon';

export default ShowerIcon;
