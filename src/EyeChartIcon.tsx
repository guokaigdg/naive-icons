import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const EyeChartIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="7" y="6" width="34" height="36" rx="2" fill="#FFFFFF"/>
<path d="M18 14 L28 14 M18 14 L18 22 M18 18 L26 18" stroke="#2A2A2A" strokeWidth={sw(2)} fill="none"/>
<path d="M15 26 L30 26 M15 26 L15 32 M15 29 L27 29" stroke="#2A2A2A" strokeWidth={sw(2)} fill="none"/>
<path d="M19 36 L29 36 M19 36 L19 40 M19 38 L27 38" stroke="#2A2A2A" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

EyeChartIcon.displayName = 'EyeChartIcon';

export default EyeChartIcon;
