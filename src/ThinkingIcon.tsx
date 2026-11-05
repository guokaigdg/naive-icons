import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ThinkingIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="26" r="14" fill="#E9C46A"/>
<circle cx="19" cy="23" r="1.6" fill="#2A2A2A" stroke="none"/>
<circle cx="29" cy="23" r="1.6" fill="#2A2A2A" stroke="none"/>
<path d="M19 31 C22 33 26 33 29 31" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="38" cy="12" r="3" fill="#FAEDCD"/>
<circle cx="33" cy="17" r="2" fill="#FAEDCD"/>

    </svg>
  );
});

ThinkingIcon.displayName = 'ThinkingIcon';

export default ThinkingIcon;
