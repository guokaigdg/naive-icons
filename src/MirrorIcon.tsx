import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MirrorIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<ellipse cx="24" cy="19" rx="12" ry="13" fill="#FAEDCD"/>
<path d="M24 32 L24 38 M16 39 L32 39" stroke="#8B5E3C" strokeWidth={sw(3)} fill="none"/>
<path d="M18 12 C21 9 27 9 30 12" stroke="#FFFFFF" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

MirrorIcon.displayName = 'MirrorIcon';

export default MirrorIcon;
