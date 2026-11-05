import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CafeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M6 14 L42 14 L38 24 L10 24 Z" fill="#E76F51"/>
<path d="M10 24 L38 24 L38 38 C38 41 34 42 24 42 C14 42 10 41 10 38 Z" fill="#FAEDCD"/>
<path d="M20 30 C20 26 28 26 28 30 L28 34 L20 34 Z" fill="#8B5E3C" stroke="none"/>

    </svg>
  );
});

CafeIcon.displayName = 'CafeIcon';

export default CafeIcon;
