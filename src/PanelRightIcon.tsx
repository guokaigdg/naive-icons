import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PanelRightIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="9" width="36" height="30" rx="4" fill="#FAEDCD"/>
<path d="M30 9 L38 9 C40.2 9 42 10.8 42 13 L42 35 C42 37.2 40.2 39 38 39 L30 39 Z" fill="#E76F51"/>
<rect x="11" y="17" width="12" height="5" rx="2" fill="#264653" stroke="none"/>
<rect x="11" y="27" width="9" height="5" rx="2" fill="#2A9D8F" stroke="none"/>

    </svg>
  );
});

PanelRightIcon.displayName = 'PanelRightIcon';

export default PanelRightIcon;
