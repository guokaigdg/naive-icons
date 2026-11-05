import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CommandIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M17 17 H31 V31 H17 Z"/>
<circle cx="13.5" cy="13.5" r="3.5"/>
<circle cx="34.5" cy="13.5" r="3.5"/>
<circle cx="13.5" cy="34.5" r="3.5"/>
<circle cx="34.5" cy="34.5" r="3.5"/>

    </svg>
  );
});

CommandIcon.displayName = 'CommandIcon';

export default CommandIcon;
