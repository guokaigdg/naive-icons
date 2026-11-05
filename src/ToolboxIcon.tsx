import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ToolboxIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="20" width="36" height="20" rx="3" fill="#E76F51"/>
<rect x="6" y="16" width="36" height="6" rx="2" fill="#264653"/>
<path d="M17 16 C 17 10 31 10 31 16" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<rect x="21" y="22" width="6" height="5" rx="1" fill="#E9C46A" stroke="none"/>

    </svg>
  );
});

ToolboxIcon.displayName = 'ToolboxIcon';

export default ToolboxIcon;
