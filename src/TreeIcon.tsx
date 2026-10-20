import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TreeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="18.24" r="13.44" fill="#588157"/>
<rect x="20.16" y="29.76" width="7.68" height="11.52" fill="#8B5E3C"/>
<circle cx="20.16" cy="16.32" r="1.44" fill="#2A2A2A"/>
<circle cx="27.84" cy="16.32" r="1.44" fill="#2A2A2A"/>

    </svg>
  );
});

TreeIcon.displayName = 'TreeIcon';

export default TreeIcon;
