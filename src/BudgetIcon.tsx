import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BudgetIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="7" y="9" width="34" height="30" rx="3" fill="#FAEDCD"/>
<path d="M7 17 L41 17" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<ellipse cx="24" cy="26" rx="9" ry="3" fill="#E9C46A" stroke="none"/>
<ellipse cx="24" cy="31" rx="9" ry="3" fill="#E9C46A" stroke="none"/>
<ellipse cx="24" cy="36" rx="9" ry="3" fill="#E9C46A" stroke="none"/>

    </svg>
  );
});

BudgetIcon.displayName = 'BudgetIcon';

export default BudgetIcon;
