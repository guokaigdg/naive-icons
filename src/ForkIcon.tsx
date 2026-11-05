import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ForkIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M15 8 V19 C15 24 19 27 24 27 C29 27 33 24 33 19 V8"/>
<path d="M21 8 V21" strokeWidth={sw(2.5)}/>
<path d="M27 8 V21" strokeWidth={sw(2.5)}/>
<path d="M24 27 V40"/>

    </svg>
  );
});

ForkIcon.displayName = 'ForkIcon';

export default ForkIcon;
