import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LighthouseIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M17 42 L20 16 H28 L31 42 Z" fill="#FFFFFF"/>
<path d="M19 26 H29 M18 34 H30" stroke="#E76F51" strokeWidth={sw(3)} fill="none"/>
<rect x="18" y="8" width="12" height="8" rx="2" fill="#E76F51"/>
<path d="M14 12 L18 10 M34 12 L30 10" stroke="#E9C46A" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

LighthouseIcon.displayName = 'LighthouseIcon';

export default LighthouseIcon;
