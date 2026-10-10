import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MouseIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="14" y="8" width="20" height="32" rx="10" fill="#2A9D8F"/>
<path d="M14 20 L34 20" strokeWidth={sw(2.5)}/>
<rect x="21.5" y="12" width="5" height="4" rx="2" fill="#E76F51" strokeWidth={sw(2)}/>

    </svg>
  );
});

MouseIcon.displayName = 'MouseIcon';

export default MouseIcon;
