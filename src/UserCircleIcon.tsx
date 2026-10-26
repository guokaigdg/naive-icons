import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const UserCircleIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="24" r="17" fill="none" stroke="#2A2A2A" strokeWidth={sw(3.5)}/>
<circle cx="24" cy="19" r="5.5" fill="#E76F51"/>
<path d="M12 36 C 12 29 18 26 24 26 C 30 26 36 29 36 36 Z" fill="#2A9D8F"/>

    </svg>
  );
});

UserCircleIcon.displayName = 'UserCircleIcon';

export default UserCircleIcon;
