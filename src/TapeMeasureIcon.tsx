import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TapeMeasureIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="18" cy="28" r="10" fill="#E9C46A"/>
<circle cx="18" cy="28" r="4" fill="#264653" stroke="none"/>
<rect x="26" y="22" width="16" height="6" fill="#FAEDCD"/>
<path d="M30 22 L30 25 M34 22 L34 25 M38 22 L38 25" stroke="#264653" strokeWidth={sw(1.5)} fill="none"/>

    </svg>
  );
});

TapeMeasureIcon.displayName = 'TapeMeasureIcon';

export default TapeMeasureIcon;
