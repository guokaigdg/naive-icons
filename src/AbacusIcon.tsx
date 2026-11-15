import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const AbacusIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="5" y="9" width="38" height="30" rx="2.5" fill="#8B5E3C"/>
<rect x="9" y="13" width="30" height="22" fill="#FAEDCD" stroke="none"/>
<path d="M15 13 V35 M24 13 V35 M33 13 V35" stroke="#8B5E3C" strokeWidth={sw(1.8)} fill="none"/>
<path d="M9 22 H39" stroke="#8B5E3C" strokeWidth={sw(2.6)} fill="none"/>
<circle cx="15" cy="17" r="3" fill="#E76F51" stroke="none"/>
<circle cx="24" cy="17" r="3" fill="#2A9D8F" stroke="none"/>
<circle cx="33" cy="17" r="3" fill="#E9C46A" stroke="none"/>
<circle cx="15" cy="28" r="3" fill="#E76F51" stroke="none"/>
<circle cx="24" cy="28" r="3" fill="#2A9D8F" stroke="none"/>
<circle cx="33" cy="28" r="3" fill="#E9C46A" stroke="none"/>

    </svg>
  );
});

AbacusIcon.displayName = 'AbacusIcon';

export default AbacusIcon;
