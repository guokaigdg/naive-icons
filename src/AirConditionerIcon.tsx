import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const AirConditionerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="5" y="12" width="38" height="15" rx="4" fill="#FFFFFF"/>
<path d="M9 22 L39 22" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<path d="M12 27 C12 33 10 36 8 39 M22 27 C22 33 20 36 18 39 M32 27 C32 33 30 36 28 39" stroke="#2A9D8F" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="36" cy="17" r="2" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

AirConditionerIcon.displayName = 'AirConditionerIcon';

export default AirConditionerIcon;
