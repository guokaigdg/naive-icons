import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WindowIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="8" width="32" height="32" rx="2" fill="#FAEDCD"/>
<rect x="12" y="12" width="24" height="24" fill="#2A9D8F" stroke="none"/>
<path d="M24 12 V36 M12 24 H36" stroke="#FAEDCD" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

WindowIcon.displayName = 'WindowIcon';

export default WindowIcon;
