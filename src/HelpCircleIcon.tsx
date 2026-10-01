import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const HelpCircleIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const labelled = Boolean(props.title || props['aria-label'] || props.role);
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
      
<circle cx="24" cy="24" r="17" fill="none" stroke="#2A2A2A" stroke-width="3.5"/>
<path d="M19 19 C 19 14 29 14 29 19 C 29 23 24 23 24 27" fill="none" stroke="#2A9D8F" stroke-width="3.5"/>
<circle cx="24" cy="33" r="2.2" fill="#2A9D8F"/>

    </svg>
  );
});

HelpCircleIcon.displayName = 'HelpCircleIcon';

export default HelpCircleIcon;
