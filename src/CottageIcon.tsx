import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CottageIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="30" y="13" width="6" height="10" fill="#8B5E3C"/>
<rect x="10" y="24" width="28" height="17" fill="#FAEDCD"/>
<path d="M7 24 L24 11 L41 24 Z" fill="#E76F51"/>
<circle cx="24" cy="28" r="4" fill="#264653"/>
<path d="M24 24.6 L24 31.4 M20.6 28 L27.4 28" stroke="#FAEDCD" strokeWidth={sw(1.6)} fill="none"/>
<rect x="17" y="31" width="7" height="10" fill="#8B5E3C"/>

    </svg>
  );
});

CottageIcon.displayName = 'CottageIcon';

export default CottageIcon;
