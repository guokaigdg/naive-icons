import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ScatterChartIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M7 8 L7 41 L41 41" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>
<circle cx="15" cy="32" r="2.6" fill="#E76F51" stroke="none"/>
<circle cx="21" cy="25" r="2.6" fill="#2A9D8F" stroke="none"/>
<circle cx="28" cy="29" r="2.6" fill="#E9C46A" stroke="none"/>
<circle cx="31" cy="18" r="2.6" fill="#264653" stroke="none"/>
<circle cx="37" cy="23" r="2.6" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

ScatterChartIcon.displayName = 'ScatterChartIcon';

export default ScatterChartIcon;
