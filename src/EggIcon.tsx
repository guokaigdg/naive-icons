import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const EggIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M10 28 C 8 20 14 14 22 14 C 26 10 34 12 38 18 C 42 24 38 34 30 36 C 22 38 12 36 10 28 Z" fill="#FAEDCD"/>
<circle cx="24" cy="25" r="7" fill="#E9C46A"/>

    </svg>
  );
});

EggIcon.displayName = 'EggIcon';

export default EggIcon;
