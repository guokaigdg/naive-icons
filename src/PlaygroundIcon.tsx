import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PlaygroundIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M7 40 V10 H41 V40" fill="none"/>
<path d="M19 10 V30 M29 10 V30" strokeWidth={sw(2.5)}/>
<rect x="17" y="30" width="14" height="4" rx="1" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

PlaygroundIcon.displayName = 'PlaygroundIcon';

export default PlaygroundIcon;
