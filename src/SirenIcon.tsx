import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SirenIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M12 30 C12 21 17 15 24 15 C31 15 36 21 36 30 Z" fill="#E76F51"/>
<rect x="8" y="30" width="32" height="6" rx="3" fill="#264653"/>
<path d="M10 20 L7 17 M38 20 L41 17 M14 13 L12 10 M34 13 L36 10" stroke="#E9C46A" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

SirenIcon.displayName = 'SirenIcon';

export default SirenIcon;
