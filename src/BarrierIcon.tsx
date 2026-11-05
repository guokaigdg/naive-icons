import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BarrierIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="18" width="36" height="8" rx="2" fill="#E76F51"/>
<path d="M12 18 L18 26 M22 18 L28 26 M32 18 L38 26" stroke="#FFFFFF" strokeWidth={sw(3)} fill="none"/>
<path d="M10 26 V40 M38 26 V40" strokeWidth={sw(3)}/>

    </svg>
  );
});

BarrierIcon.displayName = 'BarrierIcon';

export default BarrierIcon;
