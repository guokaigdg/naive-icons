import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const EarIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M14 30 C10 24 12 15 19 11 C26 7 34 11 35 19 C36 25 32 30 27 31 C24 32 23 34 23 37 C23 40 19 42 15 40" fill="none"/>
<path d="M27 25 C28 20 24 17 20 18 C16 20 15 25 17 29" fill="none"/>

    </svg>
  );
});

EarIcon.displayName = 'EarIcon';

export default EarIcon;
