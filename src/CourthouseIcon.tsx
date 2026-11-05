import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CourthouseIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M5 19 L24 8 L43 19 Z" fill="#E76F51"/>
<rect x="7" y="19" width="34" height="19" fill="#FFFFFF"/>
<path d="M12 24 L12 36 M36 24 L36 36" stroke="#264653" strokeWidth={sw(3)} fill="none"/>
<path d="M19 38 L19 30 C19 26 29 26 29 30 L29 38" fill="#264653" stroke="none"/>
<path d="M7 38 L41 38" stroke="#264653" strokeWidth={sw(3)} fill="none"/>
<path d="M11 41 L37 41" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

CourthouseIcon.displayName = 'CourthouseIcon';

export default CourthouseIcon;
