import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RubberStampIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="9" y="26" width="30" height="10" rx="2" fill="#E76F51"/>
<path d="M16 26 L18 18 L30 18 L32 26 Z" fill="#264653"/>
<path d="M20 18 C20 12 28 12 28 18" fill="#264653"/>
<path d="M15 33 L33 33" stroke="#FAEDCD" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

RubberStampIcon.displayName = 'RubberStampIcon';

export default RubberStampIcon;
