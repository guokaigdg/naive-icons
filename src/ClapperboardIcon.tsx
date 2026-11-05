import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ClapperboardIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M7 20 H41 V38 H7 Z" fill="#264653"/>
<path d="M7 9 H41 V20 H7 Z" fill="#FAEDCD"/>
<path d="M12 9 L18 20"/>
<path d="M21 9 L27 20"/>
<path d="M30 9 L36 20"/>

    </svg>
  );
});

ClapperboardIcon.displayName = 'ClapperboardIcon';

export default ClapperboardIcon;
