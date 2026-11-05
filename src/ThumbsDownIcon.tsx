import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ThumbsDownIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="7" y="10" width="7" height="17" rx="2" fill="#2A9D8F"/>
<path d="M16 10 L16 25 L23 36 C 25 38.5 27.5 37 26.5 34 L 24.5 28 L 33 28 C 36.5 28 38 25.5 37 22.5 L 34 13 C 33.3 11 31.8 10 29.5 10 Z" fill="#E9C46A"/>

    </svg>
  );
});

ThumbsDownIcon.displayName = 'ThumbsDownIcon';

export default ThumbsDownIcon;
