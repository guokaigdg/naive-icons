import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CalculatorIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="13" y="6" width="22" height="36" rx="4" fill="#E76F51"/>
<rect x="17" y="10" width="14" height="8" rx="2" fill="#FAEDCD"/>
<circle cx="20" cy="25" r="1.6" fill="#2A2A2A" stroke="none"/>
<circle cx="28" cy="25" r="1.6" fill="#2A2A2A" stroke="none"/>
<circle cx="20" cy="31" r="1.6" fill="#2A2A2A" stroke="none"/>
<circle cx="28" cy="31" r="1.6" fill="#2A2A2A" stroke="none"/>
<circle cx="20" cy="37" r="1.6" fill="#2A2A2A" stroke="none"/>
<circle cx="28" cy="37" r="1.6" fill="#2A2A2A" stroke="none"/>

    </svg>
  );
});

CalculatorIcon.displayName = 'CalculatorIcon';

export default CalculatorIcon;
