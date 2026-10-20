import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TruckIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M6 13 L28 13 L28 32 L6 32 Z" fill="#E76F51"/><path d="M28 19 L35 19 L41 27 L41 32 L28 32 Z" fill="#FAEDCD"/><circle cx="14" cy="36" r="4.5" fill="#2A2A2A"/><circle cx="34" cy="36" r="4.5" fill="#2A2A2A"/><circle cx="14" cy="36" r="1.5" fill="#FAEDCD" stroke="none"/><circle cx="34" cy="36" r="1.5" fill="#FAEDCD" stroke="none"/>

    </svg>
  );
});

TruckIcon.displayName = 'TruckIcon';

export default TruckIcon;
