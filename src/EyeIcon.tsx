import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const EyeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M6 24 C 12 11 36 11 42 24 C 36 37 12 37 6 24 Z" fill="#FAEDCD"/>
<circle cx="24" cy="24" r="7" fill="#264653" stroke="none"/>
<circle cx="24" cy="24" r="3.2" fill="#2A2A2A" stroke="none"/>
<circle cx="26.4" cy="21.6" r="1.9" fill="#FFFFFF" stroke="none"/>

    </svg>
  );
});

EyeIcon.displayName = 'EyeIcon';

export default EyeIcon;
