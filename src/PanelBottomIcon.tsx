import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PanelBottomIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
<path d="M6 30 L42 30 L42 35 C42 37.2 40.2 39 38 39 L10 39 C7.8 39 6 37.2 6 35 Z" fill="#E76F51"/>
<rect x="11" y="14" width="14" height="5" rx="2" fill="#264653" stroke="none"/>
<rect x="11" y="22" width="9" height="5" rx="2" fill="#2A9D8F" stroke="none"/>

    </svg>
  );
});

PanelBottomIcon.displayName = 'PanelBottomIcon';

export default PanelBottomIcon;
