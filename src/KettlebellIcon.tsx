import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const KettlebellIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M16 20 C16 12 19 8 24 8 C29 8 32 12 32 20" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>
<path d="M13 28 C13 22 17 19 24 19 C31 19 35 22 35 28 L35 35 C35 38 13 38 13 35 Z" fill="#264653"/>

    </svg>
  );
});

KettlebellIcon.displayName = 'KettlebellIcon';

export default KettlebellIcon;
