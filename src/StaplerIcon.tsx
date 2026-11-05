import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const StaplerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="29" width="32" height="8" rx="3" fill="#264653"/>
<path d="M10 29 L36 15 L39 20 L13 34 Z" fill="#E76F51"/>
<circle cx="37" cy="29" r="3" fill="#E9C46A"/>

    </svg>
  );
});

StaplerIcon.displayName = 'StaplerIcon';

export default StaplerIcon;
