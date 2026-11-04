import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BarChartIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="7" y="26" width="8" height="14" rx="2" fill="#2A9D8F"/>
<rect x="19" y="16" width="8" height="24" rx="2" fill="#E9C46A"/>
<rect x="31" y="8" width="8" height="32" rx="2" fill="#E76F51"/>

    </svg>
  );
});

BarChartIcon.displayName = 'BarChartIcon';

export default BarChartIcon;
