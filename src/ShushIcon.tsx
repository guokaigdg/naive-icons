import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ShushIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="24" r="16" fill="#E9C46A"/>
<circle cx="18" cy="20" r="1.8" fill="#2A2A2A" stroke="none"/>
<circle cx="30" cy="20" r="1.8" fill="#2A2A2A" stroke="none"/>
<circle cx="24" cy="30" r="3" fill="#2A2A2A"/>
<rect x="21" y="31" width="6" height="9" rx="3" fill="#F4A6A4"/>

    </svg>
  );
});

ShushIcon.displayName = 'ShushIcon';

export default ShushIcon;
