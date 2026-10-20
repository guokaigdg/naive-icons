import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BatteryIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="7" y="15" width="28" height="18" rx="4" fill="#2A9D8F"/><rect x="36" y="21" width="6" height="6" rx="2" fill="#2A9D8F"/><rect x="12" y="20" width="11" height="8" rx="2" fill="#E9C46A" stroke="none"/>

    </svg>
  );
});

BatteryIcon.displayName = 'BatteryIcon';

export default BatteryIcon;
