import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LunchboxIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M16 15.5 V10 C 16 6.5 32 6.5 32 10 V15.5" strokeWidth={sw(3)} fill="none"/>
<rect x="5" y="15" width="38" height="8" rx="2.5" fill="#FAEDCD"/>
<rect x="7" y="22" width="34" height="19" rx="3" fill="#2A9D8F"/>
<rect x="21" y="19" width="6" height="7" rx="1.5" fill="#E9C46A" strokeWidth={sw(2.4)}/>
<path d="M11 35 H37" stroke="#FAEDCD" strokeWidth={sw(2.2)} fill="none"/>

    </svg>
  );
});

LunchboxIcon.displayName = 'LunchboxIcon';

export default LunchboxIcon;
