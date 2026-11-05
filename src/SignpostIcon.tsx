import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SignpostIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="22" y="14" width="4" height="28" fill="#8B5E3C"/>
<path d="M10 14 L32 14 L36 18 L32 22 L10 22 Z" fill="#E9C46A"/>
<path d="M38 26 L16 26 L12 30 L16 34 L38 34 Z" fill="#2A9D8F"/>

    </svg>
  );
});

SignpostIcon.displayName = 'SignpostIcon';

export default SignpostIcon;
