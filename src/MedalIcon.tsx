import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MedalIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M15 5 L22 17 L12 17 Z" fill="#E76F51"/>
<path d="M33 5 L26 17 L36 17 Z" fill="#E76F51"/>
<circle cx="24" cy="30" r="10" fill="#E9C46A"/>
<path d="M24 24 L26.4 29 L32 29.6 L27.8 33.4 L29 39 L24 36 L19 39 L20.2 33.4 L16 29.6 L21.6 29 Z" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

MedalIcon.displayName = 'MedalIcon';

export default MedalIcon;
