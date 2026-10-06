import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SpinnerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="24" r="14" fill="none" stroke="#FAEDCD" strokeWidth={sw(3.5)}/>
<path d="M24 10 A 14 14 0 1 1 10 24" fill="none" stroke="#2A9D8F" strokeWidth={sw(3.5)}/>

    </svg>
  );
});

SpinnerIcon.displayName = 'SpinnerIcon';

export default SpinnerIcon;

