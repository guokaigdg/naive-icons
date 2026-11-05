import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SchoolIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M6 20 L24 8 L42 20 Z" fill="#E76F51"/>
<rect x="9" y="20" width="30" height="22" fill="#FAEDCD"/>
<rect x="20" y="28" width="8" height="14" fill="#264653" stroke="none"/>
<rect x="13" y="25" width="5" height="6" fill="#E9C46A" stroke="none"/>
<rect x="30" y="25" width="5" height="6" fill="#E9C46A" stroke="none"/>

    </svg>
  );
});

SchoolIcon.displayName = 'SchoolIcon';

export default SchoolIcon;
