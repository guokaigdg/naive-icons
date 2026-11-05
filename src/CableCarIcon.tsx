import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CableCarIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M6 10 L42 16" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<path d="M24 13 L24 18" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<rect x="16" y="18" width="16" height="14" rx="3" fill="#E76F51"/>
<path d="M19 24 L29 24" stroke="#FAEDCD" strokeWidth={sw(2)} fill="none"/>
<path d="M12 38 L36 38" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

CableCarIcon.displayName = 'CableCarIcon';

export default CableCarIcon;
