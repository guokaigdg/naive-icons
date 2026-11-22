import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ContainerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="7" y="13" width="34" height="22" rx="3" fill="#2A9D8F"/>
<path d="M7 20 H41 M7 28 H41" strokeWidth={sw(2.2)} fill="none"/>
<rect x="11" y="15.5" width="6" height="2.5" rx="1" fill="#FAEDCD" stroke="none"/>
<rect x="11" y="23.5" width="6" height="2.5" rx="1" fill="#FAEDCD" stroke="none"/>
<path d="M13 35 V40 M35 35 V40" strokeWidth={sw(2.6)} fill="none"/>

    </svg>
  );
});

ContainerIcon.displayName = 'ContainerIcon';

export default ContainerIcon;
