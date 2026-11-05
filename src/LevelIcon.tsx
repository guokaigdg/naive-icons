import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LevelIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="20" width="36" height="8" rx="2" fill="#E9C46A"/>
<rect x="20" y="22" width="10" height="4" rx="2" fill="#FFFFFF" stroke="none"/>
<circle cx="25" cy="24" r="1.5" fill="#2A9D8F" stroke="none"/>

    </svg>
  );
});

LevelIcon.displayName = 'LevelIcon';

export default LevelIcon;
