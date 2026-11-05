import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MuseumIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M16 20 C16 12 32 12 32 20" fill="#E76F51"/>
<rect x="10" y="20" width="28" height="18" fill="#FAEDCD"/>
<path d="M10 38 H38" strokeWidth={sw(3)}/>
<rect x="18" y="26" width="12" height="12" fill="#264653" stroke="none"/>
<path d="M13 22 V34 M35 22 V34" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

MuseumIcon.displayName = 'MuseumIcon';

export default MuseumIcon;
