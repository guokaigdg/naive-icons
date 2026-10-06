import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CheckSquareIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="7" y="7" width="34" height="34" rx="6" fill="none" stroke="#2A2A2A" strokeWidth={sw(3.5)}/>
<path d="M15 24.5 L21.5 31 L33.5 18" stroke="#588157" strokeWidth={sw(5)} fill="none"/>

    </svg>
  );
});

CheckSquareIcon.displayName = 'CheckSquareIcon';

export default CheckSquareIcon;

