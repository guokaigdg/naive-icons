import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CodeReviewIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="7" y="9" width="34" height="30" rx="4" fill="#FAEDCD"/>
<path d="M13 17 H27 M13 23 H22 M13 29 H25" strokeWidth={sw(2.2)} fill="none"/>
<circle cx="34" cy="30" r="6" fill="#2A9D8F"/>
<path d="M31 30 L33.5 32.5 L38 27.5" stroke="#FFFFFF" strokeWidth={sw(2.4)} fill="none"/>

    </svg>
  );
});

CodeReviewIcon.displayName = 'CodeReviewIcon';

export default CodeReviewIcon;
