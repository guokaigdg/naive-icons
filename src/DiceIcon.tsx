import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DiceIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="10" y="10" width="28" height="28" rx="5" fill="#FAEDCD"/>
<circle cx="17" cy="17" r="2.5" fill="#2A2A2A" stroke="none"/>
<circle cx="31" cy="17" r="2.5" fill="#2A2A2A" stroke="none"/>
<circle cx="24" cy="24" r="2.5" fill="#2A2A2A" stroke="none"/>
<circle cx="17" cy="31" r="2.5" fill="#2A2A2A" stroke="none"/>
<circle cx="31" cy="31" r="2.5" fill="#2A2A2A" stroke="none"/>

    </svg>
  );
});

DiceIcon.displayName = 'DiceIcon';

export default DiceIcon;
