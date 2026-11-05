import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ProjectorIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="18" width="24" height="16" rx="3" fill="#264653"/>
<circle cx="20" cy="26" r="5" fill="#FAEDCD"/>
<path d="M32 22 L42 14 L42 38 L32 30 Z" fill="#E9C46A" stroke="none"/>
<path d="M14 34 L14 39 M26 34 L26 39" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

ProjectorIcon.displayName = 'ProjectorIcon';

export default ProjectorIcon;
