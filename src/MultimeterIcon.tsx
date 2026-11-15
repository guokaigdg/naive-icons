import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MultimeterIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="10" y="6" width="28" height="34" rx="4" fill="#264653"/>
<rect x="14" y="10" width="20" height="11" rx="1.5" fill="#FAEDCD"/>
<path d="M17 17 L20 13 L23 17 L26 13 L29 17" stroke="#2A9D8F" strokeWidth={sw(2)} fill="none"/>
<circle cx="24" cy="29" r="6.5" fill="#E9C46A"/>
<path d="M24 29 L28 25" stroke="#E76F51" strokeWidth={sw(2.4)} fill="none"/>
<circle cx="17" cy="36.5" r="1.8" fill="#E76F51" stroke="none"/>
<circle cx="24" cy="36.5" r="1.8" fill="#2A2A2A" stroke="none"/>

    </svg>
  );
});

MultimeterIcon.displayName = 'MultimeterIcon';

export default MultimeterIcon;
