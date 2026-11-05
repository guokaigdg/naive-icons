import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LabelMakerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="17" width="26" height="15" rx="4" fill="#264653"/>
<rect x="11" y="22" width="16" height="5" rx="2" fill="#FAEDCD" stroke="none"/>
<path d="M32 19 L42 17 L42 31 L32 29 Z" fill="#E9C46A"/>
<path d="M35 23 L39 23 M35 26 L39 26" stroke="#264653" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

LabelMakerIcon.displayName = 'LabelMakerIcon';

export default LabelMakerIcon;
