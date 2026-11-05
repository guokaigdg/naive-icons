import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RulerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="20" width="36" height="9" rx="2" fill="#E9C46A"/>
<path d="M11 20 L11 24 M16 20 L16 23 M21 20 L21 24 M26 20 L26 23 M31 20 L31 24 M36 20 L36 23" stroke="#2A2A2A" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

RulerIcon.displayName = 'RulerIcon';

export default RulerIcon;
