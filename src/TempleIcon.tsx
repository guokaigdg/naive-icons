import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TempleIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M6 18 H42 L34 26 H14 Z" fill="#E76F51"/>
<rect x="13" y="26" width="22" height="14" fill="#FAEDCD"/>
<rect x="19" y="30" width="10" height="10" fill="#264653" stroke="none"/>
<path d="M8 40 H40" strokeWidth={sw(3)}/>

    </svg>
  );
});

TempleIcon.displayName = 'TempleIcon';

export default TempleIcon;
