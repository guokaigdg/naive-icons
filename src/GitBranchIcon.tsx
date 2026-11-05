import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GitBranchIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="14" cy="36" r="5" fill="#2A9D8F"/>
<circle cx="14" cy="12" r="5" fill="#E9C46A"/>
<circle cx="32" cy="20" r="5" fill="#E76F51"/>
<path d="M14 17 V31"/>
<path d="M32 25 C32 32 14 28 14 31"/>

    </svg>
  );
});

GitBranchIcon.displayName = 'GitBranchIcon';

export default GitBranchIcon;
