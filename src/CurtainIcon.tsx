import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CurtainIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M9 8.5 C 12 18 8 28 11.5 39.5 H20 C 16.5 28 20 18 17 8.5 Z" fill="#E76F51"/>
<path d="M39 8.5 C 36 18 40 28 36.5 39.5 H28 C 31.5 28 28 18 31 8.5 Z" fill="#E76F51"/>
<path d="M7 8 H41" strokeWidth={sw(3.5)} fill="none"/>
<circle cx="7" cy="8" r="2.2" fill="#E9C46A" strokeWidth={sw(2)}/>
<circle cx="41" cy="8" r="2.2" fill="#E9C46A" strokeWidth={sw(2)}/>

    </svg>
  );
});

CurtainIcon.displayName = 'CurtainIcon';

export default CurtainIcon;
