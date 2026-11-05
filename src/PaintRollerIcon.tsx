import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PaintRollerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="10" y="8" width="22" height="10" rx="3" fill="#2A9D8F"/>
<path d="M32 13 L38 13 L38 28 L26 28 L26 34" fill="none" stroke="#2A2A2A"/>
<rect x="22" y="32" width="8" height="10" rx="2" fill="#E76F51"/>

    </svg>
  );
});

PaintRollerIcon.displayName = 'PaintRollerIcon';

export default PaintRollerIcon;
