import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LineChartIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M7 40 L41 40 M7 9 L7 40" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<path d="M11 32 L20 22 L28 27 L38 13" stroke="#E76F51" strokeWidth={sw(3.5)} fill="none"/>
<circle cx="20" cy="22" r="2.5" fill="#E9C46A" stroke="none"/>
<circle cx="28" cy="27" r="2.5" fill="#E9C46A" stroke="none"/>
<circle cx="38" cy="13" r="2.5" fill="#E9C46A" stroke="none"/>

    </svg>
  );
});

LineChartIcon.displayName = 'LineChartIcon';

export default LineChartIcon;
