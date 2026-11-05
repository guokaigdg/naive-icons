import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PortIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M14 40 V10 H36" fill="none" stroke="#264653" strokeWidth={sw(4)}/>
<path d="M36 10 V18" strokeWidth={sw(2)}/>
<rect x="30" y="18" width="12" height="8" rx="1" fill="#E76F51"/>
<rect x="8" y="32" width="12" height="8" rx="1" fill="#2A9D8F"/>
<path d="M6 40 H42" strokeWidth={sw(3)}/>

    </svg>
  );
});

PortIcon.displayName = 'PortIcon';

export default PortIcon;
