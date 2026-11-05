import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const JuiceIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M15 15 L33 15 L31 42 L17 42 Z" fill="#E76F51"/>
<path d="M28 7 L21 17" stroke="#2A9D8F" strokeWidth={sw(3)} fill="none"/>
<circle cx="31" cy="9" r="3" fill="#E9C46A" stroke="none"/>

    </svg>
  );
});

JuiceIcon.displayName = 'JuiceIcon';

export default JuiceIcon;
