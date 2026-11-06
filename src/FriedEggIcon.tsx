import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FriedEggIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M10 26 C10 19 16 17 20 19 C22 13 30 12 33 17 C39 17 41 23 37 28 C40 33 36 39 30 38 C27 42 19 42 17 37 C11 37 9 32 10 26 Z" fill="#FFFFFF"/>
<circle cx="25" cy="28" r="7" fill="#E9C46A"/>

    </svg>
  );
});

FriedEggIcon.displayName = 'FriedEggIcon';

export default FriedEggIcon;
